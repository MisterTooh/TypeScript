import { Injectable } from '@nestjs/common';
import { MessagesRepository } from "./messages.repository";

interface Repository {
    findOne(id: string);
    findAll();
    create(content: string);
}

@Injectable()
export class MessagesService {
    //! Service is Creating it's own Dependency
    //! DON'T DO THIS, BAD PRACTICE
    // messagesRepo: Repository;
    // constructor() {
        //     this.messagesRepo = new MessagesRepository();
    // }

    //? Use dependency injection
    constructor(public messagesRepo: MessagesRepository) {}
    

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