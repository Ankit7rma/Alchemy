const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  insert(string) {
    let s = string.split("");
    const nodes = [this.root];
    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      let newNode = new TrieNode(letter);
      nodes.push(newNode);
      nodes[i].children[letter] = newNode;
    }
    nodes[nodes.length - 1].isWord = true;
  }
}

module.exports = Trie;
