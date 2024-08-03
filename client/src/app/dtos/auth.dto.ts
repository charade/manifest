export interface LoginDto {
  email: string;
  password: string;
}

export type SignUpDto = LoginDto & { pseudo: string };

export interface LoginSuccessDto {
  pseudo: string;
  avatar: string;
}
