import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  pseudo: string;

  password: string;

  avatar: string;
}

export class UpdateUserDto {
  email?: string;
  pseudo?: string;
}
