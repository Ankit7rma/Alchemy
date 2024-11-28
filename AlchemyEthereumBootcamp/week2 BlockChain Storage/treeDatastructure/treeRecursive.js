class Tree {
  constructor() {
    this.root = null;
  }
  addNode(node) {
    this.root = this.addNodeR(this.root, node);
  }
  addNodeR(current, node) {
    if (current == null) {
      return node;
    }
    if (current.data > node.data) {
      current.left = this.addNodeR(current.left, node);
    } else {
      current.right = this.addNodeR(current.right, node);
    }
    return current;
  }
}

module.exports = Tree;
