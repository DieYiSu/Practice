/**
 * Trie, also called prefix-tree.
 * Refer youtube video: https://www.youtube.com/watch?v=7XmS8McW_1U
 * Application: http://blog.xebia.in/index.php/2015/09/28/applications-of-trie-data-structure/
 */

let Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};

let Trie = function () {
    this.root = new Node();

    /**
     *
     * @param {string} input the string which you input
     * @param {*} node
     */
    this.add = function (input, node = this.root) {
        if (input.length == 0) {
            // if the input has nothing
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0])); // recursive
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    };

    this.isWord = function (word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                // if the char isn't in the trie.
                return false;
            } else {
                // if the char is in the trie.
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return node.keys.has(word) && node.keys.get(word).isEnd() ? console.log(true) : console.log(false);
    };

    this.print = function() {
		let words = new Array();
		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, new String());
		return words.length > 0 ? console.log(words) : null;
	};
};


const myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll');
myTrie.isWord('ball')
myTrie.print()