"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   interfaces.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/26 18:35:56 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/29 18:21:12 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
/**
 *!	Not the best implementation
 **/
const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
};
/**
 *?	Function:	This function will have to be repeated
 *?				and duplicate code for every different entry
 **/
const printVehicle = (vehicle) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Name: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);
};
printVehicle(oldCivic);
const newCivic = {
    name: "civic",
    year: 2023,
    broken: false,
};
const printCar = (vehicle) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Name: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);
};
printCar(newCivic);
/**
 *	Object
 */
const civic = {
    name: "civic",
    year: new Date(),
    broken: false,
    summary() {
        return `Name: ${this.name}`;
    },
};
const printCivic = (car) => {
    console.log(`Name: ${car.name}`);
    console.log(`Name: ${car.year}`);
    console.log(`Name: ${car.broken}`);
    console.log(car.summary());
};
printCivic(civic);
/**
 **	Object that also has a Summary property
 *?	Because both Civic, and drinks Objects have
 *?	Summary(); properties, they both satisfy the
 *?	Reportable interface
 */
const drinks = {
    colour: "brown",
    carbonated: "blue",
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};
const printReport = (car) => {
    console.log(car.summary());
};
printReport(civic);
printReport(drinks);
//# sourceMappingURL=interfaces.js.map