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
exports.PersonagensController = void 0;
const common_1 = require("@nestjs/common");
const personagens_service_1 = require("./personagens.service");
const create_personagem_dto_1 = require("./dto/create-personagem.dto");
const update_personagem_dto_1 = require("./dto/update-personagem.dto");
const auth_guard_1 = require("../auth/auth.guard");
let PersonagensController = class PersonagensController {
    personagensService;
    constructor(personagensService) {
        this.personagensService = personagensService;
    }
    create(createPersonagemDto) {
        return this.personagensService.create(createPersonagemDto);
    }
    findAll() {
        return this.personagensService.findAll();
    }
    findOne(id) {
        return this.personagensService.findOne(+id);
    }
    update(id, updatePersonagemDto) {
        return this.personagensService.update(+id, updatePersonagemDto);
    }
    remove(id) {
        return this.personagensService.remove(+id);
    }
};
exports.PersonagensController = PersonagensController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_personagem_dto_1.CreatePersonagemDto]),
    __metadata("design:returntype", void 0)
], PersonagensController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonagensController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonagensController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_personagem_dto_1.UpdatePersonagemDto]),
    __metadata("design:returntype", void 0)
], PersonagensController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonagensController.prototype, "remove", null);
exports.PersonagensController = PersonagensController = __decorate([
    (0, common_1.Controller)('personagens'),
    __metadata("design:paramtypes", [personagens_service_1.PersonagensService])
], PersonagensController);
//# sourceMappingURL=personagens.controller.js.map