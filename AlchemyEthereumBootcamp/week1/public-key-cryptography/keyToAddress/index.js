const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  const firstByte = keccak256(publicKey.slice(1));
  return firstByte.slice(-20);
}

module.exports = getAddress;
