```
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Quick Notes                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/26 12:02:48 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/26 13:28:50 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
```

# Installation & Resources

**This Package Manager recommended by the nodejs website and can install all you need:**

https://github.com/nvm-sh/nvm

**Documentation for npm:**

https://docs.npmjs.com/creating-a-package-json-file

**Learn from:**

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.digitalocean.com/community/tutorials/typescript-new-project
https://learnxinyminutes.com/docs/typescript/
https://www.w3schools.com/typescript/index.php

```
npm install typescript
npm install node
npm install ts-node
npm install *module name*
npm tsc --init /* for default tsconfig.json file */
npm init --y /* for default package.json file */
```

# TypeScript = JavaScript + Atype System

`TS Type System:` The entire role of TypeScript is to show us where we have errors in our code.

1. Catches errors during Development.
2. Uses Type annotation.
3. **ONLY** Active during Development.
4. Doesn't provide any performance optimisation.

# TypeScript Quick Notes

TypeScript is Basically JavaScript with more Debugging as you develop, rather than during compilation and testing. Almost everything in TypeScript is exactly with Java, except for Type annotation is required in almost all cases.

TypeScript has Decorators and Type Annotation, eg;
```
// TypeScript:
addMessage(@Body( body: AddMessageDto ) {}
// JavaScript:
addMessage(@Body(body) {}
```
***We never execute TypeScript Directly***

## Summary

1. Annotating our variables will give us errors if we make type syntax mistakes while in dev.

2. Annotating a type to our variables will protect us from above mistakes.

3. Every Value has a type. Examples:

   1. String
   2. Number (int, long, float, etc)
   3. Boolean (true, false)
   4. Date / Todo (Our definitions: Objects) /_ Works similar to typedef in C _/

4. Two catagories of Types:

   1. Primitive (Basic Types):

      1. string.
      2. boolean.
      3. number.
      4. null.
      5. void.
      6. underfined.

   2. Object (our definitions)
      1. functions.
      2. arrays.
      3. classes.
      4. objects.

5. Annotations and Inference:

   1. Annotations: Code we tell TypeScript; what type of value a variable will refer to.
   2. Inference: TypeScript will guess the type.
   3. Thanks to `interfaces`, object types can have multiple types, as long as they satisfy the `interface` requirements.

6. Union Types:
      - TypeScript will restrict the properties we can access on the resulting type.

7. TypeScript Doesn't support index in strings, and will alert a string index is only readable.

## Notes:

1. There are 3 basic types in TypeScript. `Boolean, Number, String`, and variables need to be Type Annotated.

2. Type Inference only works if declaration and initialisation is on the same line.

   1. but you can omit the type annotation if the variables are derived from explicit literals.

3. Type `any`:

   1. If no type is specified, or it is impossible to know.

   2. `JSON.parse` (a function) returns a value of type 'any', eg; if we pass a `string`, we get a `string` (Not really, we get `any`, similar to `void *`); Anytime we use `JSON.parse();` we get an `any` return value **TypeScript cannot predict return value**, and so returns 'any'.

   ## **_`AVOID TYPE 'any'`_** (See file `variables.ts`, `objects.ts`)

4. Functions Annotations:

   1. Type inference will only try to figure out what type of value a function will return. eg; `(args: type, args: type): *return value* => {}`.
   2. Note: TypeScript will not try to guess the content of the function, If you return a number and a number is returned, TypeScript will not hold your hand with logic.

   (See `functions.ts`, `destructuring.ts`)

   **_Functions:RULES:_**

   1. No Type Inference for Arguments for Functions!
   2. No Type Inference for Functions Return Values! (Though it works fine).

5. Arrays:

   1. If no annotation, type 'any' is given.
   2. Type inference for Arrays:

      - We can use type inference whenever pulling a value from array!
      - TypeScript prevents from adding incompatible elements to array.
      - Help with built-in function like, 'map', 'forEach', 'reduce'.
      - Flexible - Arrays can contain multiple different types.

   3. Adding a type annotation after variable*: string[]* to specify Array contents as only string.

6. Tuples:

   1. Type annotation is in a specific order of our choice and cannot be changed outside of the decleration (Not very useful).
   2. Very similar to an array: Array like structure where each element represents some property of a record.
   3. **_Objects are preferrable to Tuples_** (See last declaration in `tuple.ts`)

7. Interfaces (See interfaces.ts): Interfaces are structural, anything that has the properties is compliant with the interface.

   1. Creates a new type, describing the property names and value types of an object.

   2. Whenever creating an `interface` we `Capitalise` the first letter

      - Eg; `interface Vehicle`.

   3. Using an interface we can save so many lines of code and reduce code repetition.

      - Interface ensures that all type properties align with types.
      - Objects that wish to be called using interface Annotation, must.
        - follow type decalred in interface.

   4. Properties of an interface dictate the types required by an object to be used in a function etc;

      - Optional Properties can be included by adding a `?` to the variable name `age?: number;`.
      - Interfaces can also describe a function type.

   5. Basic Syntax of Interfaces (See `interfaces.ts` ):

      1. TypeScript will only check minimum requirements (variables) to Qualify as a type. If a minimum of 1 exists, then it qualifies. IE: Satisfying a Function type requirement by an interface definition, only requires 1 Type annotation to be correct and so will ignore other properties in the Object.

      2. Different Objects can all satisfy an interface's type annotation requirements if they have the same required property, even if the objects are completely different from each other. (eg; Cars and Drinks; See `interfaces.ts` Line `#104`).

   6. Majortively Work with functions that are type annotated as interfaces so we can control Type Annotation more. To support code reuseable strategy.

      1. Now we can make Objects and/or Classes that can decide to implement the interface.

8. Classes:- When we create a `Class` they have a dual nature. We can use it to create an instance of an object. We can also use a `Class` to refer to a `type`

   1. Class is a blueprint to create an object with some fields (Values) and methods (Functions) to represent a thing.

      - Traditionally name all Classes with a Capital Letter.
      - Name instances with the same word but lowercase.

   2. Classes can be explicitly marked as implementing an interface. Any missing properties will then cause an error at compile-time.

   3. How classes work with Methods (See `/classes/classes.ts`):

      - A class will have methods declared in them, which are similar to functions that perform tasks.

   4. Inheritence:

      - A class can inherit methods from an already declared class.
      - An inherited class can override the methods declared in a parent class that will only affect the methods within the inherited class.

   5. Modifiers:

      - Members are public by default
      - A keyword that can be placed on different methods and/or properties
        within a class.
      - There are 3 Types, Public, Private, and Protected.
      - Modifiers control access on the use of a Classes members:

        - Public: A Member can be called anywhere at anytime.
        - Private: Can only be called by other methods within the class.
        - Protected: Can be called by other methods within the class and/or by other methods in child/inherited classes.

      - If a Method is marked private, compiler will give a warning and not compile.

   6. Fields: (adding properties to a class)

      - You can initialise a property OR a constructor. There is no need to do both.
      - Modifiers apply to variables just as they do to methods.

        - Public: Accessed anywhere.
        - Protected/Private: Can no longer be accessed outside the class.

      - How fields work with Inheritence:

        - When calling the constructor in a child class we're required to call the constructor method of the parent class as well. (see line `#49` & line `#72` in `classes.ts`)
        - We can call `super();` in the child class which is a reference to the parent constructor method which allows us to add a new type parameter.

   7. By Adding Keyword `class "implements" interface` to our class declaration, and exporting it, TypeScript will Alert us if the class does not adhere to the interface requirements. (see `TS_APP/maps/src` Directory).

**_ Interfaces and Classes allow us to re-use code. _**

#See Directory `TS_APP`

## Automating Build & Run, & Project Organisation

#See Directory `TS_APP/sort/`

1. In `tsconfig.json` uncomment `rootDir:`"**(Place ./src here)**", and uncomment `outDir:`"**(Place ./build here)**"

   - Remember `tsc --init` to create `tsconfig.json`
   - This tells the compiler where to find the files, and where to place the output files `(*.json)`.
   - `tsc -w` tells compiler to watch all files in `/src/` to watch our files for any changes. Output says if changes are detected.

2. Concurrent Compilation and Execution

   - Generate `package.json` file using `npm init -y`
   - Download command line tools:
     ```
     npm install nodemon concurrently
     ```
   - `nodemon` allows us to re-run node compiler each time a change is made in our files. It is responsible for executing the code everytime we save.
   - `concurrently` is going to be responsible for helping us run multiple scripts at the same time.
   - See lines `#6` to `#9` to see possbile scripts (we have 3), to make compiler run, watch, and execute at the same time:

     - `"start:build": "tsc -w"` to build and watch files,
     - `"start:run": "nodemon build/index.js"` to run and execute
     - `"start": "concurrently npm:start:*"` to have concurrently run both above at the same time.

   - Now our code will re-build and re-run each time a change is made and saved in our `/src/` files

## Re-using Code in an algorithm project

#See `/TS_APP/sort/src/index.ts`

Making a algorithm work for both `numbers` and `strings`:
   
   1. Since TypeScript doesn't accept string index modification:

      - Need two conditions one for number and one for string

      - We can implement a Type Guards (See `/sort/src/index.ts` line `#23`):
         - Clarifies what is the type of the input
         - There are two types of Type Guards:
            - If Primitive: `if (typeof variable === 'type')`  - Only Works for Primitive Type as a Type Guard. (line `#31`)
            - If other Type: `if (this.var instanceof everyOtherValueConstructorCreates)`
            See line `#23`

   2. Iterface Implemetation:

      -  Create Class of Sorting Logic and Create Class of Variables Types to be Sorted
      -  Create Interface with Properties that all Classes can Adhere to