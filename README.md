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
#  Installation & Resources

**This Package Manager recommended by the nodejs website can install all you need:**
https://github.com/nvm-sh/nvm

**Documentation for npm:**
https://docs.npmjs.com/creating-a-package-json-file

**Learn from:**
https://www.digitalocean.com/community/tutorials/typescript-new-project

```
npm install typescript
npm install node
npm install ts-node
npm install *module name*
npm tsc --init /* for default tsconfig.json file */
npm init --yes /* for default package.json file */
```


# TypeScript = JavaScript + Atype System

`TS Type System:`

1. Catches errors during Development.
2. Uses Type annotation.
3. **ONLY** Active during Development.
4. Doesn't provide any performance optimisation.

# TypeScript Quick Notes

```
TypeScript is Basically JavaScript with more Debugging as you develop, rather than during compilation and testing.

Almost everything in TypeScript is exactly with Java, except for Type annotation is required in almost all cases.

```
## Summary

1. Annotating our variables will give us errors if we make type syntax mistakes while in dev.

2. Annotating a type to our variables will protect us from above mistakes.

3. Every Value has a type. Examples:
   1. String
   2. Number (int, long, float, etc)
   3. Boolean (true, false)
   4. Date / Todo (Our definitions: Objects) /* Works similar to typedef in C */

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

## Notes:

1. Type Inference only works if declaration and initialisation is on the same line.

2. Type `any`:
   `JSON.parse` (a function) returns a value of type 'any', eg; if we pass a `string`, we get a `string` (Not really, we get `any`, similar to `void *`); Anytime we use `JSON.parse();` we get an `any` return value **TypeScript cannot predict return value**, and so returns 'any'. **_AVOID TYPE 'any'._** (See file `variables.ts`, `objects.ts`)

3. Functions:RULES:

   1. No Type Inference for Arguments for Functions!
   2. No Type Inference for Functions Return Values! (Though it works fine).

4. Functions Annotations:

   1. Type inference will only try to figure out what type of value a function will return. eg; `(args: type, args: type): *return value* => {}`.
   2. Note: TypeScript will not try to guess the content of the function, If you return a number and a number is returned, TypeScript will not hold your hand with logic.

   (See `functions.ts`, `destructuring.ts`)

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
   3. ***Objects are preferrable to Tuples*** (See last declaration in `tuple.ts`)

7. Interfaces (See interfaces.ts)

   1. Creates a new type, describing the property names and value types of an object.

   2. Whenever creating an `interface` we `Capitalise` the first letter
      - Eg; `interface Vehicle`.

   3. Using an interface we can save so many lines of code and reduce code repetition.
         -	Interface ensures that all type properties align with types.
         -	Objects that wish to be called using interface Annotation, must.
   		-  follow type decalred in interface.

   4. Basic Syntax of Interfaces:
   
      1. TypeScript will only check minimum requirements (variables) to Qualify as a type. If a minimum of 1 exists, then it qualifies.
