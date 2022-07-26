/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   arrays.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/26 12:02:48 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/26 13:30:26 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 *?	Adding a type annotation after carMakers*: string[]* to specify
 *?	Arrray contents as only string
 **/

//?	Type inference
const carMakers = ["ford", "toyota", "chev"];
//!	If no annotation, type 'any' is given
const carMk = [];
//?	Manual Annotation
let carMake: string[] = [];

/**
 **	Examples
 **/

//?	Object array
const dates = [new Date(), new Date()];

//?	2D arrays type inference of 2D
const carsByMake = [["F150"], ["Corolla"], ["Camaro"]];
//?	2D example with manual annotation
const carMade: string[][] = [];

/**
 ** 1.	We can use type inference whenever pulling a value from array!
 **	2.	TypeScript prevents from adding incompatible elements to array
 **	3.	Help with built-in function like, 'map', 'forEach', 'reduce'
 **	4.	Flexible - Arrays can contain multiple different types
 **/

//* 1. Help with inference
const cars = carMakers[0];
const myCar = carMakers.pop();

//*	2. Help with prevention
carMakers.push("isuzu");

//* 3. Help with map (TypeScript will give lots of auto-complete)
carMakers.map((car: string) => {
  return car.toUpperCase;
});

//*	4. Flexible Types
const importantDates = [new Date(), "10-12-2030"];

//?	Add manual annotation to flexible types
const normalDates: (Date | string)[] = [];

importantDates.push("12-12-2030");
importantDates.push(new Date());
