export class CharacterArray {
    constructor (public data: string) {}
    
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return (
            this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
        );
    }

    swap(leftIndex: number, rightIndex: number): void {
        const charArray = this.data.split('');

        const temp = charArray[leftIndex];
        charArray[leftIndex] = charArray[rightIndex];
        charArray[rightIndex] = temp;

        this.data = charArray.join('');
    }
}