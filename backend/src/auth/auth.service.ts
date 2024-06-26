import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/res/user/user.service';
import { SignInDto } from './dto';

import * as bcrypt from 'bcrypt';
import { HTTP_RESPONSE_ENUM } from 'src/enums/http-response.enum';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * @function signIn
   * when signIn payload fail to connect
   * don't want to share the exact field with client
   *
   * @param {credential} can either be email or pseudo
   */
  async signIn({ password, ...credential }: SignInDto) {
    try {
      const user = await this.userService.findOneByCredentials(credential);

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
        { id: user.id },
        {
          secret: process.env.JWT_SECRET,
        },
      );
    } catch {
      throw new HttpException(
        HTTP_RESPONSE_ENUM.SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
