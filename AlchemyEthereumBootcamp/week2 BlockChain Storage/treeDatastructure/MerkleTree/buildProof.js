class MerkleTree {
  constructor(leaves, concat) {
    this.root = null;
    (this.leaves = leaves), (this.hash = concat);
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
  getNextlayer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        newArr.push(this.hash(arr[i - 1], arr[i]));
        if (i === arr.length - 1) {
          arr = newArr;
          newArr = [];
        }
      } else if (i === arr.length - 1) {
        newArr.push(arr[i]);
        arr = newArr;
        newArr = [];
      }
    }

    return arr;
  }
  getProof(index) {
    let proof = [];
    let arr = [...this.leaves];
    while (arr.length !== 1) {
      if (index % 2 === 0) {
        if (index !== arr.length - 1) {
          proof.push({
            data: arr[index + 1],
            left: false,
          });
        }
      } else {
        proof.push({
          data: arr[index - 1],
          left: true,
        });
      }
      arr = this.getNextlayer(arr);
      index = Math.floor(index / 2);
    }

    this.root = arr[0];

    return proof;
  }
}

module.exports = MerkleTree;
