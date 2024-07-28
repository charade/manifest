export interface LoginDto {
  email: string;
  password: string;
}

export type SignUpDto = LoginDto & { pseudo: string };
