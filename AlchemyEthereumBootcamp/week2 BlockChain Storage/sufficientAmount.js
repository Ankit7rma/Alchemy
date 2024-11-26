class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    (this.inputUTXOs = inputUTXOs), (this.outputUTXOs = outputUTXOs);
  }
  execute() {
    let totalInput = 0;
    let totalOutput = 0;
    this.inputUTXOs.forEach((i) => {
      const { spent, amount } = i;

      totalInput += amount;
      if (spent) {
        throw Error("Already Spent ");
      }
    });
    this.outputUTXOs.forEach((input) => {
      const { amount } = input;
      totalOutput += amount;
    });

    if (totalInput < totalOutput) {
      throw Error("not valid ");
    }
  }
}

module.exports = Transaction;
