import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserSubscriber } from './user/subscribers/user-subscriber';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.getOrThrow('DB_HOST'),
          // host: configService.getOrThrow('DB_HOST'),
          port: parseInt(configService.getOrThrow('MYSQL_TCP_PORT')),
          database: configService.getOrThrow('MYSQL_DATABASE'),
          autoLoadEntities: true,
          username: configService.getOrThrow('MYSQL_USER'),
          password: configService.getOrThrow('MYSQL_PASSWORD'),
          synchronize: true,
          subscribers: [UserSubscriber],
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
