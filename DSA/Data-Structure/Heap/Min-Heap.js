/**
 * Heaps: JavaScript implement with array.
 * 
 * parent: index / 2
 * left child: i*2
 * right child:  1*2+1
 * 
 * Refer youtube video: https://www.youtube.com/watch?v=dM_JHpfFITs&t=8s&ab_channel=freeCodeCamp.org
 * Heap visualization: https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */

let MinHeap = function(){
    let heap = [null]; //create the first null at the index 0, because the index 1 will be the refer index.

    this.insert = function(num){
        heap.push(num); //assume it push to the index 0;

        if(heap.length > 2){ //if the array have more than two item
            let index = heap.length - 1; //the item which just push into the array's index
            while(heap[Math.floor(index/2)] > heap[index]){ //if the parent is great than the child, the child has to pick it up!
                if(index >= 1){ //if the index has not reach to the root
                    [heap[Math.floor(index/2)], heap[index]] = [heap[index], heap[Math.floor(index/2)]] //ES6 syntax, swap these two item.
                    if(Math.floor(index/2)>1){ // if the parent node is not the root node
                        index = Math.floor(index/2);
                    }else {
                        break;
                    }
                }
            } 
        }
    }

    this.remove = function(){
        let smallest = heap[1]; //the root node;
        if(heap.length > 2){ //if the array have more than two item
            heap[1] = heap[heap.length-1] //the root will be placed by the last node value
            heap.splice(heap.length - 1); //cut the last node, because the last node had moved to the root.
            
            if(heap.length == 3){
                if(heap[1] > heap[2]){ //if the root is greater then the child
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                }
                return smallest;
            }

            // if the node is more than 2
            let index = 1;
            let left = 2*index;
            let right = 2*index +1;

            while(heap[index]>=heap[left] || heap[index] >= heap[right]) { //if the parent is greater than left child or right child
                if(heap[left] < heap[right]){
                    [heap[index], heap[left]] = [heap[left], heap[index]];
                    index = 2*index;
                }else { //if the right node is less than left node
                    [heap[index], heap[right]] = [heap[right], heap[index]];
                    index = 2*index +1;
                }
                left = 2*index;
                right = 2*index+1;
                if(heap[left] == undefined || heap[right] == undefined){
                    break;
                }
            }
        } else if (heap.length == 2){ //if array only have two node, just remove the root, than the second node will be the root node(this as the array representation)
            heap.splice(1, 1);
        } else {
            return null
        }
        return smallest;
    }

    // the one of most common use case for the heap ADT is heap sort!
    this.sort = function(){
        let result = new Array();
        while(heap.length > 1){
            result.push(this.remove());
        }
        return result;
    }

    this.show = function(){
        console.log(heap);
    }
}

const minHeap = new MinHeap();

console.log(minHeap);

minHeap.insert(20);
minHeap.insert(30);
minHeap.insert(22);
minHeap.insert(1);

minHeap.remove()

minHeap.show();