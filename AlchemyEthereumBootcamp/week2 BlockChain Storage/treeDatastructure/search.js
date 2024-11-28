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
  hasNode(number) {
    function search(root, number) {
      if (root === null) {
        return false;
      }
      if (root.data === number) {
        return true;
      } else if (root.data < number) {
        return search(root.right, number);
      } else {
        return search(root.left, number);
      }
    }
    return search(this.root, number);
  }
}

module.exports = Tree;
