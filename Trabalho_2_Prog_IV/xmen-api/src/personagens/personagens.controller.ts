import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PersonagensService } from './personagens.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('personagens')
export class PersonagensController {
  constructor(private readonly personagensService: PersonagensService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createPersonagemDto: CreatePersonagemDto) {
    return this.personagensService.create(createPersonagemDto);
  }

  @Get()
  findAll() {
    return this.personagensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagensService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemDto: UpdatePersonagemDto) {
    return this.personagensService.update(+id, updatePersonagemDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagensService.remove(+id);
  }
}