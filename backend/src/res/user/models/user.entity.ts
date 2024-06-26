import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false, length: 100 })
  email: string;

  @Column('varchar', { nullable: false })
  password: string;

  @Column({ unique: true })
  pseudo: string;

  @Column('varchar', { default: null })
  avatar: string;
}
