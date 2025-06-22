import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT ?? 4444;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_BASE_URL,
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap().catch((err) => console.error(err));
