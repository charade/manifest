import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('memo-api');
  app.use(cookieParser());
  // port setting
  const port = process.env.APP_PORT || 3000;
  await app.listen(port, () =>
    console.log(`App running in ${process.env.APP_ENV} mode on port ${port}`),
  );
}
bootstrap();
