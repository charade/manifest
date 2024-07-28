import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { nullable: false, length: 100 })
  @Exclude()
  email: string;

  @Column('varchar', { nullable: false })
  @Exclude()
  password: string;

  @Column({ unique: true })
  pseudo: string;

  @Column('varchar', { default: null })
  avatar: string;

  @CreateDateColumn()
  createdAt;
}
