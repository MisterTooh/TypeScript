"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   variables.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/25 17:46:06 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/25 19:42:55 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
/**
 ** All are correct implementation, but stick to 1
 *? Type Inference only works if declaration and
 *? initialisation is on the same line
 **/
//* Variables
let oranges = 5;
let apples;
apples = 5;
let slow = "slow";
let speed;
speed = "fast";
let hasName;
hasName = true;
let not;
not = null;
let nothing;
nothing = undefined;
//* Objects
let now = new Date();
//* Array
let colours;
colours = ["red", "green", "blue"];
let myNumbers = [1, 2, 3];
let truths = [true, false];
//* Classes
class Car {
}
let car = new Car();
//* Object literal
let point = {
    x: 10,
    y: 20,
};
/*******
 *! Type 'any'
 *?	JSON.parse returns a value of type 'any'
 *?		Eg; if we pass a string, we get a string
 *?		(Not really, we get 'any', similar to Void *);
 *
 *?	Anytime we use JSON.parse(); we get an 'any' return value
 *?		TypeScript cannot predict return value, and so returns 'any'
 *!	AVOID TYPE 'any'
 **/
//* When to use annotations
//*	1) Function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
//* Correct Implementation
const jsonTest = '{"x": 10, "y": 20}';
const coord = JSON.parse(jsonTest);
console.log(coord);
//* Case 2)
let words = ["red", "green", "blue"];
let foundWord;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}
//* Correct Implementation
let word = ["red", "green", "blue"];
let found = false;
for (let i = 0; i < word.length; i++) {
    if (word[i] === "green") {
        found = true;
    }
}
//* Case 3) Variable who's type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbersAboveZero;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero = numbers[i];
    }
}
//* Correct Implementation
//?	boolean || number
let number = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        numberAboveZero = number[i];
    }
}
//# sourceMappingURL=variables.js.map