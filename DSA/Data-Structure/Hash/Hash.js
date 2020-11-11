// Reference code: https://codepen.io/beaucarnes/pen/VbYGMb?editors=0011
/**
 * Refer code: https://codepen.io/beaucarnes/pen/VbYGMb?editors=0011
 * Refer youtube video: https://www.youtube.com/watch?v=F95z5Wxd9ks
 */


var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        //sperate each char and then add it all.
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = function () {
    let storage = [];
    const storageLimit = 14;

    this.print = function () {
        console.log(storage);
    };

    this.add = function (key, value) {
        var index = hash(key, storageLimit);

        if (storage[index] === undefined) {
            //if the bucket is empty, than insert the key/value into it.
            storage[index] = [
                [key, value]
            ];
        } else {
            // if the bucket is not empty
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] == key) {
                    //refresh the value, if the key is the same
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]); //if the key is different, push the new key/value into the bucket.
            }
        }
    };

    this.remove = function (key) {
        var index = hash(key, storageLimit); // calculate which bucket is this key placed.
        if (storage[index] === undefined) {
            return undefined;
        }
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key){
        var index = hash(key, storageLimit); // calculate which bucket is this key placed.
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                console.log(`${key} : ${storage[index][i][1]}`); 
                }
            }
        }
    }
};

// console.log(hash("test", 100));
// console.log(hash("t3st", 100));

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
ht.lookup('tux');
ht.print();