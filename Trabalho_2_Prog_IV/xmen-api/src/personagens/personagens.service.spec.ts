import { Test, TestingModule } from '@nestjs/testing';
import { PersonagensService } from './personagens.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Personagem } from './entities/personagem.entity';

const arrayDePersonagensFalsos = [
  { id: 1, titulo: 'Wolverine', conteudo: 'Garras', imagem: 'img.jpg', ordem: 1, categoria: 'Professor' },
  { id: 2, titulo: 'Magneto', conteudo: 'Metal', imagem: 'img2.jpg', ordem: 1, categoria: 'Vilao' }
];

const mockPersonagemRepository = {
  find: jest.fn().mockResolvedValue(arrayDePersonagensFalsos),
};

describe('PersonagensService', () => {
  let service: PersonagensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonagensService,
        {
          provide: getRepositoryToken(Personagem),
          useValue: mockPersonagemRepository,
        },
      ],
    }).compile();

    service = module.get<PersonagensService>(PersonagensService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar uma lista de personagens quando chamar o findAll()', async () => {
    const resultado = await service.findAll();
    
    expect(resultado).toEqual(arrayDePersonagensFalsos);
    expect(mockPersonagemRepository.find).toHaveBeenCalled();
  });
});