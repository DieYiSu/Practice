/**
 * refer youtube video: 
 * - https://www.youtube.com/watch?v=5cU1ILGy6dM
 * - https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s&ab_channel=mycodeschool
 */

class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
        }else { //if there's already has a root node
            const searchTree = function(node){
                if(data < node.data){ //if the add data is smaller than parent node.data, go to the left-tree
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if (node.left !== null){
                        return searchTree(node.left)
                    }
                }else if (data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if (node.right !== null){
                        return searchTree(node.right);
                    }
                }else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        };
        console.log(current.data);
        return current.data;
    }

    findMax(){
        let current = this.root;
        while (current.right !== null){
            current = current.right;
        }
        console.log(current.data);
        return current.data
    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(current.data === data){
                console.log(`True`);
                return true;
            }
            if(data < current.data){
                current = current.left;
            }else {
                current = current.right;
            }
        }
        console.log(`False`);
        return false;
    }

    remove(data){
        const removeNode = function(node, data){
            if(node === null){ // empty tree?
                return null;
            }
            if(data == node.data){
                // node has no child
                if(node.left == null && node.right == null){
                    return null;
                }
                // node has no left child, then replace it by the right node
                if(node.left == null){
                    return node.right;
                }
                if(node.right == null){
                    return node.left;
                }
                // node has both left and right child
                // I get confusing about the delete pseudocode.
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);

bst.findMax()


// console.log(bst)