import * as bcrypt from 'bcrypt';

export const generateHash = (password: string) =>
  bcrypt.hash(password, +process.env.PASSWORD_SALT);
