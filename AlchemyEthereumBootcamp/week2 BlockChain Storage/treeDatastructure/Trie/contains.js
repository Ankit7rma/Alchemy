const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, root = this.root) {
    const charArr = word.split("");

    for (let i = 0; i < charArr.length; i++) {
      const letter = charArr[i];

      if (root.children.hasOwnProperty(letter)) {
        root = root.children[letter];
      } else {
        let node = new TrieNode(letter);
        root.children[letter] = node;
        root = node;
      }
    }

    root.isWord = true;
  }

  contains(word, root = this.root) {
    let arr = word.split("");
    if (arr.length === 0) {
      return false;
    }
    let contains = true;

    for (let i = 0; i < arr.length; i++) {
      let letter = arr[i];
      if (!root.isWord && root.children.hasOwnProperty(letter)) {
        root = root.children[letter];
      } else {
        return false;
      }
    }
    if (!root.isWord) {
      return false;
    }
    return contains;
  }
}

module.exports = Trie;
