class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst (data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(data){
        let node = new Node(data); // don't need to add the next property, because this node will be the last one;
        let current;

        // if empty, make head
        if(!this.head){
            this.head = node;
        }else {
            current = this.head;
            while(current.next){  // get the last next;
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //  Insert at index
    insert(data, index){
        if(index > 0 && index > this.size){ //if index is out of range
            return;
        }

        // If first index
        if(index === 0){
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    // Get at index
    getAt(index){
        let current = this.head;
        let count = 0;
        
        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }


    // remove at index
    removeAt(index){
        let current = this.head;
        let previous;
        let count = 0;

        if(index == 0){
            current = current.next;
            return;
        }

        while(count < index){
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = current.next;

        this.size--;
        return null;
    }

    // Clear the list
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
        console.log('========');
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insert(500, 2);

ll.printListData();
ll.removeAt(2);
ll.printListData();

ll.clearList();
ll.printListData();

console.log(ll);