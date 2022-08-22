/**
 **	Bubble Sort
 **/
import { Sorter } from "./Sorter";
import { isArrayTypeNode } from "typescript";
import { NumbersArray } from "./NumbersArray";
import { CharacterArray } from "./CharacterArray"
import { LinkedList } from "./LinkedList";

const smallArray = new NumbersArray([50, 30, -5, 10])
const sorter = new Sorter(smallArray);
sorter.sort();
console.log(smallArray.data);

const charArray = new CharacterArray("ZabyCdX");
const sorted = new Sorter(charArray);
sorted.sort();
console.log(charArray.data);

const listArray = new LinkedList();
listArray.add(500);
listArray.add(5);
listArray.add(10);
listArray.add(-50);
listArray.add(-500);

const sorting = new Sorter(listArray);
sorting.sort();
listArray.print();


/**
 ** To check value of a string at index 0
 **/
// console.log("X".charCodeAt(0));
