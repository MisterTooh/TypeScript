import { MessagesRepository } from "./messages.repository";

interface Repository {
    findOne(id: string);
    findAll();
    create(content: string);
}

export class MessagesService {
    messagesRepo: Repository;

    //! Service is Creating it's own Dependency
    //! DON'T DO THIS, BAD PRACTICE
    // constructor() {
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