"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagensService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const personagem_entity_1 = require("./entities/personagem.entity");
let PersonagensService = class PersonagensService {
    personagemRepository;
    constructor(personagemRepository) {
        this.personagemRepository = personagemRepository;
    }
    create(createPersonagemDto) {
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
    findOne(id) {
        return this.personagemRepository.findOneBy({ id: id });
    }
    async update(id, updatePersonagemDto) {
        await this.personagemRepository.update(id, updatePersonagemDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.personagemRepository.delete(id);
        return { mensagem: `Personagem com id ${id} removido com sucesso!` };
    }
};
exports.PersonagensService = PersonagensService;
exports.PersonagensService = PersonagensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(personagem_entity_1.Personagem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonagensService);
//# sourceMappingURL=personagens.service.js.map