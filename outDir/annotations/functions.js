"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   functions.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/25 19:42:27 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/25 19:43:14 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
/**
 ** Functions eg;
 **/
const logNumber = (i) => {
    console.log(i);
};
/**
 ** Functions:
 *!	RULES:
 *
 *!	1)	No Type Inference for Arguments for Functions!
 *!	2)	No Type Inference for Functions Return Values! (Though it works fine)
 *
 ** Functions Annotations:
 *?		Type inference will only try
 *?		to figure out what type of value
 *?		a function will return
 *!		(args: type, args: type): *return value* => {}
 *
 *?	TypeScript will not try to guess the content of the function
 *		If you return a number and a number is returned, TypeScript
 *		will not hold your hand with logic.
 *?	Three ways to write function declarations
 **/
const add = (a, b) => {
    return a + b;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
//? can return undefined if return type void;
const logger = (message) => {
    console.log(message);
    return undefined;
};
//? (args: type): *never* will never return, and will never reach end of function
const throwError = (message) => {
    throw new Error(message);
};
//? If we will return something (It is common to return something)
const errorThrow = (message) => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
//# sourceMappingURL=functions.js.map