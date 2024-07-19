import { Injectable } from '@nestjs/common';
import { UserDto, UpdateUserDto } from './models/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  signUp(createUserDto: UserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);

    return this.userRepository.save(newUser);
  }

  findOneById(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  findOneByCredentials(userCredential: { email?: string; pseudo?: string }) {
    return this.userRepository.findOne({
      where: [
        { email: userCredential.email },
        { pseudo: userCredential.pseudo },
      ],
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
