import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './res/user/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './res/user/models/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        ({
          type: 'mysql',
          host: configService.getOrThrow('DB_HOST'),
          port: parseInt(configService.getOrThrow('MYSQL_TCP_PORT')),
          database: configService.getOrThrow('MYSQL_DATABASE'),
          autoLoadEntities: true,
          username: configService.getOrThrow('MYSQL_USER'),
          password: configService.getOrThrow('MYSQL_PASSWORD'),
          synchronize: true,
        }) as TypeOrmModuleOptions,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
