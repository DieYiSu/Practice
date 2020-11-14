/**
 * Refer article: https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
 * implement used by min-heap
 */

class QElement {
    constructor(element, priority){
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.heap = [null] //heap array first element will be null;
    }

    enqueue(item, priority){
        let newNode = new QElement(item, priority);
        if(this.heap.length == 1){ //if the queue is empty;
            this.heap.push(newNode);
            return;
        }
        // if the queue isn't none
        this.heap.push(newNode);
        
        let index = this.heap.length -1;
        while(this.heap[index].priority < this.heap[Math.floor(index/2)].priority){
            if(index >= 1){
                [this.heap[index], this.heap[Math.floor(index/2)]] = [this.heap[Math.floor(index/2)], this.heap[index]];
                if(Math.floor(index/2) > 1){
                    index = Math.floor(index/2);
                }else {
                    break;
                }
            }
        }
    }

    dequeue(){
        let smallestNode = this.heap[1];
        if(this.heap.length == 1){ // if the heap array is empty;
            console.log('PQ is empty')
            return;
        }else if (this.heap.length == 2){ // if the heap array only has 1 node;
            this.heap.splice(this.heap.length -1);
            return smallestNode;
        }

    }

    show(){
        console.log(this.heap);
    }
}

const pq = new PriorityQueue();

pq.enqueue('A', 1);
// pq.enqueue('B', 2);
// pq.enqueue('C', 3);
// pq.enqueue('D', 4);
pq.dequeue()

pq.show();