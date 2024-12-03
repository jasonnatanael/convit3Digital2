/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
// eslint-disable-next-line prettier/prettier
import { AppModule } from './app.module';
// eslint-disable-next-line prettier/prettier

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
