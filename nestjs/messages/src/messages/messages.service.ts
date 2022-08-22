import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;

    // constructor() {
        //! Service is Creating it's own Dependency
        //! DON'T DO THIS, BAD PRACTICE
        //     this.messagesRepo = new MessagesRepository();
    // }
    //? Use dependency injection
    
    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}