import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './res/user/user.module';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        console.log(
          configService.getOrThrow('DB_HOST'),
          '=================>',
          process.env,
        );
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
        } as TypeOrmModuleAsyncOptions;
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
