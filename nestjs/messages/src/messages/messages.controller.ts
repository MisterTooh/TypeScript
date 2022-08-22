import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { NotContains } from 'class-validator';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// Class Decoorator (The http link will be http:link:port/message)
@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    //! BAD PRACTICE, DON'T DO IT
    //! We are again creating dependency here
    // constructor() {
        //     this.messagesService = new MessagesService();
    // }
    //? Use dependency injection
        
        
    // Method Decorator
    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()       // Arguments Decorator
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get("/:id")
    async getMessage(@Param("id") id: string) {
        const message = await this.messagesService.findOne(id);

        //  Exception, class is for Status Code 404, Error: 404 Not Found!
        if (!message)
            throw new NotFoundException('Message Not Found with that id');
        
        return message;
    };
}
