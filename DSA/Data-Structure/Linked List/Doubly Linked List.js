class Node {
    constructor(previous = null, data, next = null) {
        this.previous = previous;
        this.data = data;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // insert
    Prepend(data) {
        const newNode = new Node(null, data, this.head); //notice this newNode's next property is this.head.

        if (this.head) {
            // if there already has the node inside.
            this.head.previous = newNode;
            this.head = newNode;
        } else {
            //if there don't have any node inside.
            this.head = newNode;
        }

        if (!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }

    // Insert last node
    Append(data) {
        const newNode = new Node(null, data, null);

        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.previous = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    //  Insert at index
    AppendAt(index, data) {
        let count = 0;
        let current = this.head;
        const newNode = new Node(null, data, null);

        if (index > 0 && index > this.size) {
            console.log("out of range");
            return;
        }
        if (index == 0) {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        while (current) {
            if (count == index) {
                newNode.previous = current.previous;
                current.previous.next = newNode;
                current.previous = newNode;
                newNode.next = current;
            }
            current = current.next;
            count++;
        }
        return;
    }

    // remove at index
    remove(value){
        // still need to do it by myself

        // if the dll is empty, return it.
        if(!this.head){ 
            return
        }

        let currentNode = this.head;
        let removeNode = null;

        while(currentNode){
            if(currentNode.data == value){
                removeNode = currentNode;

                if(removeNode === this.head){
                    // if HEAD is going to be removed
                    this.head = removeNode.next;
                    
                    if(this.head){
                        this.head.previous = null;
                    }
                    
                    if(removeNode === this.tail){
                        this.tail = null;
                    }
                } else if (removeNode === this.tail){
                    // if tail is going to be removed

                    this.tail = removeNode.previous;
                    this.tail.next = null;
                } else {
                    // if middle node is going to be removed

                    const previousNode = removeNode.previous;
                    const nextNode = removeNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }
            currentNode = currentNode.next;
        }
    }

    // Clear the list
    cleanList(){
        this.head = null;
        this.tail = null;
    }

    // printData
    printListData() {
        if(this.head === null && this.tail === null){
            console.log('Dll is empty');
        }

        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
        return;
    }
}

const dll = new DoublyLinkedList();

dll.Prepend(100);
dll.Prepend(200);
dll.Prepend(300);
// dll.Append(300);

// dll.AppendAt(3, 400);
// dll.remove(300);
dll.cleanList();

dll.printListData();
// console.log(dll.size)
