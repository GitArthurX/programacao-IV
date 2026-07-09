import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [PessoaController],
  providers: [PessoaService],
})
export class PessoaModule {}