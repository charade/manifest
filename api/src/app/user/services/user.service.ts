import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto, UpdateUserDto } from '../models/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository } from 'typeorm';
import { HTTP_RESPONSE_ENUM } from 'src/app/enums/http-response.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async signUp({ email, password, pseudo }: UserDto) {
    try {
      // avoid saving email or pseudo multiple times
      const isEmailAlreadyRegistered = await this.findOneByEmail(email);
      const isPseudoAlreadyRegistered = await this.userRepository.findOne({
        where: { pseudo },
      });

      if (isEmailAlreadyRegistered || isPseudoAlreadyRegistered) {
        throw new HttpException(
          HTTP_RESPONSE_ENUM.USER_ALREADY_EXISTS,
          HttpStatus.CONFLICT,
        );
      }

      const newUser = await this.userRepository.create({
        email,
        password,
        pseudo,
      });

      await this.userRepository.save(newUser);
      return;
    } catch (error) {
      throw new HttpException(
        error.response || HTTP_RESPONSE_ENUM.SERVER_ERROR,
        error.status,
      );
    }
  }

  findOneById(uuid: string) {
    return this.userRepository.findOne({ where: { uuid } });
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  findAll() {
    return `This action returns all user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
