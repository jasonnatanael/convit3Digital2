/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';


@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {}
