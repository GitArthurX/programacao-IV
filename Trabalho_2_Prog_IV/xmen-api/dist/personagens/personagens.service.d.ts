import { Repository } from 'typeorm';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './entities/personagem.entity';
export declare class PersonagensService {
    private personagemRepository;
    constructor(personagemRepository: Repository<Personagem>);
    create(createPersonagemDto: CreatePersonagemDto): Promise<Personagem>;
    findAll(): Promise<Personagem[]>;
    findOne(id: number): Promise<Personagem | null>;
    update(id: number, updatePersonagemDto: UpdatePersonagemDto): Promise<Personagem | null>;
    remove(id: number): Promise<{
        mensagem: string;
    }>;
}
