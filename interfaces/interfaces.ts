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
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

printVehicle(oldCivic);

//? Implementing Interface below
/**
 **	1.	Interface ensures that all type properties align with types
 **	2.	Objects that wish to be called using interface Annotation, must
 **		follow type decalred in interface
 **/

/**
 **	Basic Interface Syntax
 **/
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const newCivic = {
  name: "civic",
  year: 2023,
  broken: false,
};

const printCar = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

printCar(newCivic);

/**
 ** Making Object Complex, and assigning it to interface and function
 *?	Year was changed to a type Object of 'new Date();' within our object Civic
 *?	and so object Civic is no longer qualifies as `Car` and so we change
 *?	Year in the interface Car to be of type Date and now Civic Qualifies as Car
 *
 *?	Adding the function `summary();` now states that a `Car` needs to have a
 *?	function `summary();`
 *
 **	Basic Syntax of Interfaces:
 **/
interface Car {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

/**
 *	Object
 */
const civic = {
  name: "civic",
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printCivic = (car: Car): void => {
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
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

/**
 **	Basic Syntax of Interfaces
 **/
interface Reportable {
  summary(): string;
}

const printReport = (car: Reportable): void => {
  console.log(car.summary());
};

printReport(civic);
printReport(drinks);
