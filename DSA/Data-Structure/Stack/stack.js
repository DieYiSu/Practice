class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // isEmpty(){
    //     return !this.head;
    // }

    push(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.tail = newNode;
            this.head = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
        // return;
    }
    pop(){
        // have someproblem
        this.head ? this.head = this.head.value  : null;
    }

    printStack(){
        // have some problem
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const stack = new Stack;

stack.push(300);
stack.push(200);
// stack.pop();
// stack.pop();
console.log(stack);

stack.printStack();