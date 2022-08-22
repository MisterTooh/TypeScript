# `NestJS`

## `Web Development Framework`

Creating a Nest project from scratch (Basics)

```
npm init -y

npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2

```

## File Naming Conventions

-   **Main File:**
    -   File: `main.ts`
    -   Function: `bootstrap();`
-   **App Controller:**
    -   File: `app.controller.ts`
    -   Class:  `AppController {}`
-   **App Module:**
    -   File: `app.module.ts`
    -   Class: `AppModule {}`
- ***etc; pattern will always be the same so it can easily be identified***

#   Basics

## `Dependencies:`

1.  @nestjs/common:
    -   Contains Vast majority of functions, classes, etc;

2.  @nestjs/platform-express:
    -   The framework to handle incoming requests (HTTP Server Implementation).
    -   Installs an Adapter between nestjs & express.
3.  reflect-metadata:
    -   Helps make decorators work.

## `Setup`

1.  `tsconfig.json` See file.
2.  Create a Nest module and a controller:
    1.  Creates a Server request response cycle.
    2.  Code to handle request:
        - Process & Tools:
            1.  Validate Data Contained in the request:
                - Pipes.
            2.  Make sure the user is authenticated:
                - Guard.
            3.  Route the request to a particular function:
                - Controller.
            4.  Run some Business Logic:
                - Service.
            5.  Access a Database:
                - Repository.
    3.  Response.

##  `Parts of Nest`

Note:
   - Simplest form of Nest App, bare minimum, consists of at least 1 module and 1 cotnroller.

1.  `Controllers:`
    - Handles incoming requests.
2.  `Services:`
    - Handles data access and business logic.
3.  `Modules:`
    - Groups together code.
4.  `Pipes:`
    - Validates incoming data.
5.  `Filters:`
    - Handles errors that occur during request handling
6.  `Guards:`
    - Handles Authentication.
7.  `Interceptors:`
    - Adds extra logic to incoming requests or outgoing responses.
8.  `Repositories:`
    - Handles data stored in a DB.

## `Building`

Note:   95% of the time we will import from `nestjs/common`, the import `@nestjs/core` is mostly imported in `main.ts`

1.  main.ts:
    -   First file to be executed and starts listening to all traffic.
    -   Usually modules and controllers are in their own files.
2.  Create Class and place Decorator to make controller:
    -   Nest extensively uses decorators.
    -   The class will handle enroute incoming requests.
    -   Add methods that will handle each type of requests.
        -   above method we place decorator to assign method job.
3.  Create Module:
    -   It will wrap up a controller..
    -   For module decorator we must pass configuration option or object.
4.  Create `async functio bootstrap() {}`
    -   Commonly named bootstrap, see `nestjs/src/main.ts` line `#22`
    -   tell app to listen to port (we have selected `1234`), see line `#25` same file as above

## `Controller`

Note: See `/src/app.controller.ts`

-   Adding strings in the Decorator `@Controller("/app")` & `@Get("/asdf")` makes the controller route requests through the strings:
    -   So now instead of `https://localhost:1234` we now have to access the webpage via `https://localhost:1234/app/asdf`
    -   The method `getRootRoute()` now gets accessed via above link
-   Adding a second method, with decorator `@Get("/bye")` now adds a new route to the controller that will route any requests made for `"/bye"` in the webpage (`https://localhost:1234/app/bye`)

#   Messages

##  `Application`

1.  Store and retreive message stored in a plain `.json` 3 routes in totals
    1.  To list all messages saved
    2.  To retrieve message by ID
    3.  Create Message

2.  Requests will consist of:
    0. Note:  ***We will only create one controller, one service, one repository to service each request.***
    1.   Request - Get from `https://localhost:1234/messages`
        -   No Validation (No Pipe)
        -   No Authentication (No Guard)
        -   Needs Controller
        -   Needs Service
        -   Needs Repository (`.json` file)
    2.  Request - Post to `https://localhost:1234/messages`
        -   Validates Data (Needs Pipe)
        -   No Authentication (No Guard)
        -   Needs Controller
        -   Needs Service
        -   Needs Repository (`.json` file)
    3.  If User wants to request a message with particular ID from - `https://localhost:1234/messages/id`
        -   Validates Data (Needs Pipe)
        -   No Authentication (No Guard)
        -   Needs Controller
        -   Needs Service
        -   Needs Repository (`.json` file)

3.  Naming:
    -   Controller: MessagesController
    -   Service:    MessagesService
    -   Repository: MessagesRepository

4.  Modules: To wrap up sets of functionality (Groups of different Classes) and above Request requirements
    -   Name:   AppModule

5.  Nestjs CLI:
    -   Generates a Project with many files and modules and autofills package.json etc;
        -   Generate will also connect everything by default.
        -   Nestjs auto generates `.eslintrc.js` by default that highlights errors around formatting (disable by commenting out entire file)
    -   Generate a module via nest CLI:
        -   In command line: `nest generate module {insertName}`
            -   This will generate a new directory module file named `insertName.module.ts`
            -   Only write name`insertName`, not `insertNameModule`
    
    -   Create Messages Controller:
        -   Run Command: `nest generate controller messages/messages --flat`
        -   `--flat`: Tells nest not to create a directory called `messages/controller`
    -   Add Routes to Controller: *to view them in browser*
        -   Route Options we will use:
            -   List All Messages:
                -   GET/messages
            -   Create a message:
                -   GET/messages
            -   Get a Particular Message:
                -   GET/messages/:id
        -   Format within `MessagesController`:
            -   Route each request to their respective Methods
        ```
            @controller("/messages/")
            export class MessagesController {
                @Get()
                listMessages();
                @Post()
                createMessage();
                @Get()
                getMessage();
            }
        ```
        -   Extract information out of incoming request using decorators:
            -   HTTP Request Consists of:
                -   Start Line
                    -   POST `/messages/5?validate=true HTTP/1.1`
                -   Headers
                    -   Host: `localhost:1234`
                    -   Content-Type: `application/json`
                -   Body:
                    -   `{"content": "Hi There"}`
            -   Decorators Used to extract the info from URL:
                -   @Param("id")
                    -   `5`
                -   @Query()
                    -   `validate=true`
                -   @Headers()
                    -   `localhoost:1234`
                -   @Body()
                    -   `{"content": "Hi There"}`
            -   Method Decorators will determine which method the route request should take.
            -   Argumennts decorators will determine what information will be extracted or parsed by the methods.
            -   Validation  Pipe: (Pipe):
                -   Validate information before it reaches the controller If invalid, we reject.
                -   See `/src/main.ts` line `#7 -> #10`
            -   Validation Rules:
                1.   Tell  Nest use global Validation (See See `/src/main.ts` line `#8`) Only needed once.
                2.  Create a class that describes the different properties that the request body should have:
                    -   Data Transfer Object (DTO):
                        -   
                3.  Add Validationn Rules:
                    -   Library: `npm install class-validator`
                    -   Additional: `class-transformer`
                    -   Add Decorator `@IsString`
                4.  Apply Class to request Handler:
                    -   `CreateMessageDto` - How does App recognise that this is a Type?
                    -   The Configurations in `tsconfig.ts`:
                        -   Config:  `"emitDecoratorMetadata": true` collects & sends some data from TypeScript to allow the converted javascript code to analyse as per required type annotated in controller.

    -  Services & Repositories:
        -   Services and Repositories will always be classes.
            1.  Services:
                -   To run Business Logic
                -   To fetch data from Repositories
                -   Frequently uses multiple Repositories to find and store data.
            2.  Repositories:
                -   Storage Related Logic.
                -   Stores Data in Databases, files.
                -   *In our case, MessageRepository will be a file.
                -   Can be a Wrapper around other storage libraries
                (TypeORM, Mongoose schema)
            3.  Usually have similar methods, and method names:
                -   MessagesService:
                    -   `findOne(id: string)`
                    -   `findAll()`
                    -   `create(message: string)`
                -   MessageRepository
                    -   `findOne(id: string)`
                    -   `findAll()`
                    -   `create(message: string)`
            4.  It is up to a service to interact with a repository, and the controller will interact with a service.
            5.  Create Service & Repository: (From Scratch)
                -   Service will depend on code written in repository.
                -   Create Repository **First**
                    -   Create File in root Directory `{insertName.ts}`
                        -   Fill File with format to be stored see `messages.json.sample`.
                -   Create Service: **Second**
                    -   Service creates it's own dependency:
                        -   ***THIS IS BAD PRACTICE***
                    -   See `/src/messages/messages.service.ts`
            6.  Create Instance of Service and give it to controller.
    -   Exceptions:
        -   See line `#33` in `/src/messages/messages.controller.ts`.
    6.   Dependency Injection:
        -   Everything in nestjs revolves around dependency injection.
        -   Why:
            -   There is a dependency/heirarchy among our Classes:
                -   **Repository** > **Service** > **Controller**.
                -   We should not allow our Service and Controller to create their own dependencies.
    7.  Inversion of Control Principle:
        -   Class should not create instances of it's dependencies on it's own.
            -   **BAD**:
                -   Class creates it's own coopy of MessagesRepsitory.
            -   **Better**:
                -   Class receives it's dependency.
            -   **BEST**:
                -   Class receives it's dependency, and it doesn't specifically require `'Repository'`.
                    1.  Uses interface.
                    2.  


# API Clients

1.  postman:
    -   I am using Postman, very easy to setup and use.

2.  VSCode REST Client Extension
    -      