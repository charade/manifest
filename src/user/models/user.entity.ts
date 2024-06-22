import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false, length: 100, unique: true })
  email: string;

  @Column('varchar', { nullable: false })
  password: string;

  @Column()
  pseudo: string;

  @Column('varchar', { default: null })
  avatar: string;
}
