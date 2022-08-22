import { Controller, Get } from "@nestjs/common";

/**
 * Decorator to inform nest that the
 * below class will be used as a controller
 **/
 @Controller("/app")
 export class AppController {
     @Get("/hi")
     getRootRoute() {
         return "hi there";
     }

     @Get("/bye")
     getByeThere()  {
        return "bye there";
     }
 }