"use strict";
/**
 **	Bubble Sort
 **/
class Sorter {
    constructor(array) {
        this.array = array;
    }
    sort() {
        const { length } = this.array;
        if (length == 0) {
            console.log("No Input.");
            return;
        }
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    const temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }
            }
        }
    }
}
const sorter = new Sorter(["ZbzAcBaC"]);
sorter.sort();
console.log(sorter.array);
/**
 ** To check value of a string at index 0
 **/
console.log("X".charCodeAt(0));
