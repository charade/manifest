import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UpdateUserDto } from './models/user.dto';
import * as bcrypt from 'bcrypt';
import { HTTP_RESPONSE_ENUM } from 'src/enums/http-response.enum';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async create(@Body() createUserDto: UserDto) {
    const { email, pseudo, password } = createUserDto;

    try {
      const userExist = await this.userService.findOneByCredentials({
        email,
        pseudo,
      });

      if (userExist) {
        return new HttpException(
          HTTP_RESPONSE_ENUM.USER_ALREADY_EXISTS,
          HttpStatus.CONFLICT,
        );
      }

      const passwordHash = await bcrypt.hash(
        password,
        +process.env.PASSWORD_SALT,
      );

      return await this.userService.signUp({
        ...createUserDto,
        password: passwordHash,
      });
    } catch {}
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
