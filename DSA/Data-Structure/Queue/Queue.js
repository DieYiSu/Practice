class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        
        if(this.head == null){
            console.log('Queue is empty');
        }else {
            console.log(`Queue isn't empty`);
        }

        // it seems have some problem, it suppose to show true/false 
        // return !this.head;
    }

    enQueue(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.tail = newNode;
            this.head = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    deQueue(){
        this.head ? this.head = this.head.next : console.log(`Queue is empty`);
    }

    printQueue(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const queue = new Queue;


// queue.isEmpty()

// queue.enQueue(100);
// queue.enQueue(200);
// queue.enQueue(300);
// queue.deQueue();
// queue.deQueue();
// queue.deQueue();
// queue.deQueue();

// queue.printQueue();


