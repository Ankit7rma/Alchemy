class Tree {
  constructor() {
    this.root = null;
  }
  addNode(node) {
    if (!this.root) {
      this.root = node;
      return;
    }
    let newRoot = this.root;
    while (true) {
      if (node.data < newRoot.data) {
        if (newRoot.left !== null) {
          newRoot = newRoot.left;
        } else {
          newRoot.left = node;
          break;
        }
      } else {
        if (newRoot.right !== null) {
          newRoot = newRoot.right;
        } else {
          newRoot.right = node;
          break;
        }
      }
    }
  }
}

module.exports = Tree;
