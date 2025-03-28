import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // cookie parser
  app.use(cookieParser());

  // helmet
  app.use(helmet());

  // serve static assets
  app.useStaticAssets(join(__dirname, '../public'));

  // set global prefix
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
