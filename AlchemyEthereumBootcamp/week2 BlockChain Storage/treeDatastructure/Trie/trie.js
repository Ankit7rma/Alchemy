class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = null;
    this.isWord = false;
  }
}

module.exports = TrieNode;
