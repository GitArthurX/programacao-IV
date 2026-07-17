import { Test, TestingModule } from '@nestjs/testing';
import { PersonagensController } from './personagens.controller';
import { PersonagensService } from './personagens.service';
import { JwtService } from '@nestjs/jwt';

describe('PersonagensController', () => {
  let controller: PersonagensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonagensController],
      providers: [
        {
          provide: PersonagensService,
          useValue: {},
        },
        {
          provide: JwtService,
          useValue: {}, 
        }
      ],
    }).compile();

    controller = module.get<PersonagensController>(PersonagensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});