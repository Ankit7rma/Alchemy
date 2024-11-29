class MerkleTree {
  constructor(leaves, concat) {
    (this.leaves = leaves), (this.concat = concat);
  }
  getRoot() {
    if (this.leaves.length == 1) {
      return this.leaves[0];
    }
    let oddTree = this.leaves.length % 2 != 0;
    let initialLength = this.leaves.length;
    let counter = 0;

    while (this.leaves.length > 1) {
      if (oddTree && counter === initialLength - 1) {
        let oddLeaf = this.leaves.shift();
        this.leaves.push(oddLeaf);
        initialLength = this.leaves.length;
        counter = 0;
      } else {
        let leaf1 = this.leaves.shift();
        let leaf2 = this.leaves.shift();
        this.leaves.push(this.concat(leaf1, leaf2));
        counter += 2;
      }
    }

    return this.leaves[0];
  }
}

module.exports = MerkleTree;
