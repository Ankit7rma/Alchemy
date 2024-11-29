function verifyProof(proof, node, root, concat) {
  let ans = node;
  proof.forEach((item) => {
    if (item.left) {
      ans = concat(item.data, ans);
    } else {
      ans = concat(ans, item.data);
    }
  });

  return ans === root;
}

module.exports = verifyProof;
