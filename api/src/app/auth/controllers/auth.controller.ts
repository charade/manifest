import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RouteEnum } from 'src/app/enums/routes';
import { RequestKeysEnums } from 'src/app/enums/request.enum';
import { AuthService } from '../services/auth.service';
import { SignInDto } from '../models/dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller(RouteEnum.Auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(RouteEnum.SignIn)
  @HttpCode(HttpStatus.OK)
  async signIn(
    @Body() payload: SignInDto,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const generatedToken = await this.authService.signIn(payload);
      res.cookie(process.env.AUTH_COOKIE, `Bearer ${generatedToken}`, {
        httpOnly: true,
        maxAge: Date.now() + 3600 * 1000,
      });
      res.status(HttpStatus.OK).send();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @UseGuards(AuthGuard)
  @Post(RouteEnum.checkUser)
  checkUser(@Req() req: Request) {
    return req[RequestKeysEnums.UserID];
  }
}
