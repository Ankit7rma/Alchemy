class MerkleTree {
  constructor(leaves, concat) {
    (this.leaves = leaves), (this.concat = concat);
  }
  getRoot() {
    if (this.leaves.length == 1) {
      return this.leaves[0];
    }
    while (this.leaves.length > 1) {
      let leaf1 = this.leaves.shift();
      let leaf2 = this.leaves.shift();
      this.leaves.push(this.concat(leaf1, leaf2));
    }

    return this.leaves[0];
  }
}

module.exports = MerkleTree;
