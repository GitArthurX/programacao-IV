import { PersonagensService } from './personagens.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagensController {
    private readonly personagensService;
    constructor(personagensService: PersonagensService);
    create(createPersonagemDto: CreatePersonagemDto): Promise<import("./entities/personagem.entity").Personagem>;
    findAll(): Promise<import("./entities/personagem.entity").Personagem[]>;
    findOne(id: string): Promise<import("./entities/personagem.entity").Personagem | null>;
    update(id: string, updatePersonagemDto: UpdatePersonagemDto): Promise<import("./entities/personagem.entity").Personagem | null>;
    remove(id: string): Promise<{
        mensagem: string;
    }>;
}
