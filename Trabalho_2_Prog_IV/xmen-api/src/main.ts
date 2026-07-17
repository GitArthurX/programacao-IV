import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Libera a comunicação com o seu Front-end
  app.enableCors();

  // Configuração da Documentação (Swagger)
  const config = new DocumentBuilder()
    .setTitle('API X-Men Evolution')
    .setDescription('Documentação oficial da API para gerenciamento de personagens do X-Men Evolution.')
    .setVersion('1.0')
    .addBearerAuth() // Permite testar o JWT direto pela página de documentação
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  
  // A documentação ficará disponível no endereço http://localhost:3000/api
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();