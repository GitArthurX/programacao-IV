import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class PessoaService {
  private usuarios: Usuario[] = [];
  private idCounter = 1;

  create(createUsuarioDto: CreateUsuarioDto) {
    const novoUsuario = { id: this.idCounter++, ...createUsuarioDto };
    this.usuarios.push(novoUsuario);
    return novoUsuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index > -1) {
      this.usuarios[index] = { ...this.usuarios[index], ...updateUsuarioDto };
      return this.usuarios[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index > -1) {
      const removido = this.usuarios.splice(index, 1);
      return removido[0];
    }
    return null;
  }
}