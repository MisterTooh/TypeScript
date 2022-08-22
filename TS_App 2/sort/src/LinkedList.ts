class Node {
    next: Node | null = null;

    constructor (public data: number) {}
}

export class LinkedList {
    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }
        let cur: Node | null = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        
        cur.next = node;
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }

    at(index: number) {
        if (!this.head) {
            throw new Error("Index out of Bounds");
        }
        
        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            
            counter++;
            node = node.next;
        }
        
        throw new Error("Index out of Bounds");
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error("List Empty");
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        if (!this.head) {
            throw new Error("List Empty");
        }
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }

    print(): void {
        if (!this.head) {
            return;
        }
        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
