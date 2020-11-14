/**
 * Refer article: https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
 * implement used by min-heap
 */

class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [null] //heap array first element will be null;
    }

    enqueue(item, priority) {
        let newNode = new QElement(item, priority);
        if (this.heap.length == 1) { //if the queue is empty;
            this.heap.push(newNode);
            return;
        }
        // if the queue isn't none
        this.heap.push(newNode);

        let index = this.heap.length - 1;
        while (this.heap[index].priority < this.heap[Math.floor(index / 2)].priority) {
            if (index >= 1) {
                [this.heap[index], this.heap[Math.floor(index / 2)]] = [this.heap[Math.floor(index / 2)], this.heap[index]];
                if (Math.floor(index / 2) > 1) {
                    index = Math.floor(index / 2);
                } else {
                    break;
                }
            }
        }
    }

    dequeue() {
        if (this.heap.length == 1) { // if the heap array is empty;
            console.log('PQ is empty')
            return;
        }

        let smallestNode = this.heap[1];

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length == 3) {
                if (this.heap[1].priority > this.heap[2].priority) { //if the root is greater then the child
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallestNode;
            }
            let index = 1;
            while (this.heap[2 * index].priority < this.heap[index].priority || this.heap[2 * index + 1].priority < this.heap[index].priority) {
                if (this.heap[2 * index].priority < this.heap[2 * index + 1].priority) {
                    [this.heap[2 * index].priority, this.heap[index]] = [this.heap[index], this.heap[2 * index].priority];
                    index = 2 * index;
                } else {
                    [this.heap[2 * index + 1].priority, this.heap[index]] = [this.heap[index], this.heap[2 * index + 1].priority];
                    index = 2 * index + 1;
                }

                if (this.heap[2 * index] === undefined || this.heap[2 * index + 1] === undefined) {
                    break;
                }
            }
        } else if (this.heap.length == 2) { // if the heap array only has 1 node;
            this.heap.splice(this.heap.length - 1);
            return smallestNode;
        }
        return smallestNode;
    }

    show() {
        console.log(this.heap);
    }
}

const pq = new PriorityQueue();

pq.enqueue('A', 1);
pq.enqueue('B', 2);
pq.enqueue('C', 3);
pq.enqueue('D', 4);
pq.dequeue()

pq.show();