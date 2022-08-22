"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
class MessagesService {
    findOne(id) {
        return this.messagesRepo.findOne(id);
    }
    findAll() {
        return this.messagesRepo.findAll();
    }
    create(content) {
        return this.messagesRepo.create(content);
    }
}
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map