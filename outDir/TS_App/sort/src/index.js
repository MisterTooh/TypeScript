"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 **	Bubble Sort
 **/
const Sorter_1 = require("./Sorter");
const NumbersArray_1 = require("./NumbersArray");
const CharacterArray_1 = require("./CharacterArray");
const LinkedList_1 = require("./LinkedList");
const smallArray = new NumbersArray_1.NumbersArray([50, 30, -5, 10]);
const sorter = new Sorter_1.Sorter(smallArray);
sorter.sort();
console.log(smallArray.data);
const charArray = new CharacterArray_1.CharacterArray("ZabyCdX");
const sorted = new Sorter_1.Sorter(charArray);
sorted.sort();
console.log(charArray.data);
const listArray = new LinkedList_1.LinkedList();
listArray.add(500);
listArray.add(5);
listArray.add(10);
listArray.add(-50);
listArray.add(-500);
const sorting = new Sorter_1.Sorter(listArray);
sorting.sort();
listArray.print();
/**
 ** To check value of a string at index 0
 **/
// console.log("X".charCodeAt(0));
//# sourceMappingURL=index.js.map