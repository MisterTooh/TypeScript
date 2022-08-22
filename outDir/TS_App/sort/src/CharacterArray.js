"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterArray = void 0;
class CharacterArray {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const charArray = this.data.split('');
        const temp = charArray[leftIndex];
        charArray[leftIndex] = charArray[rightIndex];
        charArray[rightIndex] = temp;
        this.data = charArray.join('');
    }
}
exports.CharacterArray = CharacterArray;
//# sourceMappingURL=CharacterArray.js.map