import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // this will remove the extra properties from the request body
    forbidNonWhitelisted: true, // this will throw an error if the request body contains extra properties
    transform: true, // this will transform the request body to the dto class
  }
  ));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();