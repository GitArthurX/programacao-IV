import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from './pessoa/pessoa.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './pessoa/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: 'sua_senha',
      database: 'nome_do_seu_banco',
      entities: [Usuario],
      synchronize: true, 
    }),
    PessoaModule,
    AuthModule,
  ],
})
export class AppModule {}