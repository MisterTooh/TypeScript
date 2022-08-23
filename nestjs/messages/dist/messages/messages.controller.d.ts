import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    listMessages(): any;
    createMessage(body: CreateMessageDto): any;
    getMessage(id: string): Promise<any>;
}
