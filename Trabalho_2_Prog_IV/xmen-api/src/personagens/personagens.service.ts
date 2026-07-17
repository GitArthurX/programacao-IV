import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './entities/personagem.entity';

@Injectable()
export class PersonagensService {
  constructor(
    @InjectRepository(Personagem)
    private personagemRepository: Repository<Personagem>,
  ) {}

  create(createPersonagemDto: CreatePersonagemDto) {
    const novoPersonagem = this.personagemRepository.create(createPersonagemDto);
    return this.personagemRepository.save(novoPersonagem);
  }

  findAll() {
    return this.personagemRepository.find({
      order: {
        ordem: 'ASC',
      },
    });
  }

  findOne(id: number) {
    return this.personagemRepository.findOneBy({ id: id });
  }

  async update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    await this.personagemRepository.update(id, updatePersonagemDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.personagemRepository.delete(id);
    
    return { mensagem: `Personagem com id ${id} removido com sucesso!` };
  }
}