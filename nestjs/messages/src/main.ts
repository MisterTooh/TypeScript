import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //Validates request
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(1234);
}
bootstrap();
