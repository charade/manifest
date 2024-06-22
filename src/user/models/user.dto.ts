import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'incorrect email format' })
  email: string;

  @IsNotEmpty({ message: 'incorrect pseudo' })
  pseudo: string;

  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto {
  email?: string;
  pseudo?: string;
}
