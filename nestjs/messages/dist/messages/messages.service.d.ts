interface Repository {
    findOne(id: string): any;
    findAll(): any;
    create(content: string): any;
}
export declare class MessagesService {
    messagesRepo: Repository;
    findOne(id: string): any;
    findAll(): any;
    create(content: string): any;
}
export {};
