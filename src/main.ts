import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const port: number = parseInt(`${process.env.PORT}`) || 3000;
  const config = new DocumentBuilder()
    .setTitle('Dogs')
    .setDescription('Dogs app API')
    .setVersion('1.0')
    .addTag('dogs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
};

bootstrap();
