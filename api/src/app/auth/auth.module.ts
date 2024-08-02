import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/app/user/user.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      global: true,
      signOptions: {
        expiresIn: '86400s',
      },
    }),
  ],
})
export class AuthModule {
  constructor() {}
}
