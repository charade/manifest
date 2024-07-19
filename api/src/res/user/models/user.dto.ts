import { IsEmail, IsNotEmpty } from 'class-validator';
import { HTTP_RESPONSE_ENUM } from 'src/enums/http-response.enum';

export class UserDto {
  @IsEmail({}, { message: HTTP_RESPONSE_ENUM.EMAIL_NOT_VALID })
  email: string;

  @IsNotEmpty({ message: HTTP_RESPONSE_ENUM.EMPTY_PSEUDO })
  pseudo: string;

  @IsNotEmpty({ message: HTTP_RESPONSE_ENUM.PASSWORD_NOT_VALID })
  password: string;
}

export class UpdateUserDto {
  email?: string;
  pseudo?: string;
}
