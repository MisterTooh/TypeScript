"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(array) {
        this.array = array;
    }
    sort() {
        const { length } = this.array;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.array.compare(j, j + 1)) {
                    this.array.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
//# sourceMappingURL=Sorter.js.map