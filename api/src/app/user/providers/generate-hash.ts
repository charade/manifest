import * as bcrypt from 'bcrypt';

export const generateHash = async (password: string) =>
  bcrypt.hash(password, process.env.PASSWORD_SALT);
