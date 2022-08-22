"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   tuple.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/26 13:30:38 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/26 18:33:32 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
/**
 **	Tuples (Tuple)
 *?	Very similar to an array
 *?	1.	Array like structure where each element
 *?			represents some property of a record
 **/
//!	Object (Lots of lines)
const drink = {
    colour: "brown",
    carbonated: true,
    sugar: 40,
};
//! Array (Not very helpful)
//? Order is lost if we change it
const pepsi = ["brown", true, 40];
pepsi[0] = 40;
pepsi[2] = "brown";
/**
 **	Tuples: Type annotation is in a specific order of our choice
 **	and cannot be changed outside of the decleration
 **/
const shani = ["red", true, 40];
const sprit = ["clear", true, 40];
const tea = ["brown", false, 20];
//? Tuples usecase
const carSpecs = [400, 3354];
//? Why Object better than Tuple
const carStats = {
    horsePower: 400,
    weight: 3354,
};
//# sourceMappingURL=tuple.js.map