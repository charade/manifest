import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/app/user/services/user.service';
import { SignInDto } from '../models/dto';

import * as bcrypt from 'bcrypt';
import { HTTP_RESPONSE_ENUM } from 'src/app/enums/http-response.enum';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  /**
   * when signIn payload fail to connect
   * don't want to share the exact field with client
   */
  async signIn({ password, email }: SignInDto) {
    try {
      const user = await this.userService.findOneByEmail(email);
      if (!user) {
        throw new HttpException(
          HTTP_RESPONSE_ENUM.EMAIL_OR_PASSWORD_NOT_VALID,
          HttpStatus.BAD_REQUEST,
        );
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new HttpException(
          HTTP_RESPONSE_ENUM.EMAIL_OR_PASSWORD_NOT_VALID,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.jwtService.signAsync(
        { id: user.uuid },
        {
          secret: process.env.JWT_SECRET,
        },
      );
    } catch (error) {
      throw new HttpException(
        error.response || HTTP_RESPONSE_ENUM.SERVER_ERROR,
        error.status,
      );
    }
  }
}
