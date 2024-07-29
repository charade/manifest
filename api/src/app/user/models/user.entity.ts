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
  email: string;

  @Column('varchar', { nullable: false })
  password: string;

  @Column({ unique: true })
  pseudo: string;

  @Column('varchar', { default: null })
  avatar: string;

  @CreateDateColumn()
  createdAt;
}
