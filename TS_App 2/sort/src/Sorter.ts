interface ToSort {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public array: ToSort) {}

  sort(): void {
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