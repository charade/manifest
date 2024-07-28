import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HTTP_RESPONSE_ENUM } from 'src/app/enums/http-response.enum';
import { RequestKeysEnums } from 'src/app/enums/request.enum';

import { UserService } from 'src/app/user/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);

    if (!token) {
      throw new HttpException(
        HTTP_RESPONSE_ENUM.AUTHENTICATION_FAILED,
        HttpStatus.UNAUTHORIZED,
      );
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.userService.findOneById(payload.id);
      request[RequestKeysEnums.UserID] = user.uuid;
    } catch {
      throw new HttpException(
        HTTP_RESPONSE_ENUM.AUTHENTICATION_FAILED,
        HttpStatus.UNAUTHORIZED,
      );
    }

    return true;
  }

  extractToken(request: any): string | undefined {
    const [type, token] =
      request.cookies[process.env.AUTH_COOKIE].split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
