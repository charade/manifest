import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('memo');
  app.use(cookieParser());

  //allow transform pipe
  // ex: Exclude decorator
  const reflector = app.get(Reflector);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  // port setting

  const port = process.env.APP_PORT || 3000;
  await app.listen(port, () => {
    console.log(`App running in ${port} mode on port ${port}`);
  });
}
void bootstrap();
