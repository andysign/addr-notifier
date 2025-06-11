import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('endpoints')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
  // const app = await NestFactory.create(AppModule);
  // app.enableCors();
  // app.setGlobalPrefix("/api/v0");
  // const document = SwaggerModule.createDocument(
  //   app,
  //   new DocumentBuilder()
  //     .setTitle("API")
  //     .setDescription("The Notification API")
  //     .setVersion("1.0")
  //     .addTag("App")
  //     .build(),
  // );
  // const documentFactory = () => SwaggerModule.createDocument(app, document);
  // const SwaggerCustomOpt = { jsonDocumentUrl: "json", yamlDocumentUrl: "yaml" };
  // SwaggerModule.setup("/api/v0", app, documentFactory, SwaggerCustomOpt);
  // await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
