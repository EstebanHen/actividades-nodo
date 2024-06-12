class StackNode<T> {
    constructor(public value: T, public next: StackNode<T> | null = null) {}
}

class Stack<T> {
    private elements: T[];

    constructor() {
        this.elements = [];
    }

    push(value: T): void {
        this.elements.push(value);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop());
