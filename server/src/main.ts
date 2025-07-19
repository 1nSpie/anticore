import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express'; // 👈 Импорт
import { join } from 'path';

async function bootstrap() {
  const port = process.env.PORT ?? 4444;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    // origin: process.env.FRONTEND_BASE_URL,
    credentials: true,
  });

  app.useStaticAssets(join(__dirname, '..'), {
    prefix: '/public/',
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap().catch((err) => console.error(err));
