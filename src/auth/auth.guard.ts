import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HTTP_RESPONSE_ENUM } from 'src/enums/http-response.enum';
import { RequestKeysEnums } from 'src/enums/request.enum';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.userService.findOneById(payload.id);
      request[RequestKeysEnums.UserID] = user.id;
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
      request.cookies[process.env.COOKIES_TOKEN].split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
