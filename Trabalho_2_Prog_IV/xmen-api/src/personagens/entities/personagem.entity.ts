import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('personagens')
export class Personagem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  titulo: string;

  @Column('text')
  conteudo: string;

  @Column()
  imagem: string;

  @Column('int')
  ordem: number;

  @Column()
  categoria: string;
}