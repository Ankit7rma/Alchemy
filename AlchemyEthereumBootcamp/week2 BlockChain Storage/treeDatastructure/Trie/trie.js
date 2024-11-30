class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = null;
    this.isWord = false;
  }
}

module.exports = TrieNode;

// const TrieNode = require('./TrieNode');

// class Trie {
//     constructor() {
//         this.root =new TrieNode(null)

//     }
// }

// module.exports = Trie;
