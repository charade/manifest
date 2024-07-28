import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { UserSubscriber } from './subscribers/user-subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity], process.env.MYSQL_DATABASE)],
  controllers: [UserController],
  providers: [UserService, UserSubscriber],
  exports: [UserService],
})
export class UserModule {}
