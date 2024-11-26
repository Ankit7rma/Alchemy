class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    (this.inputUTXOs = inputUTXOs), (this.outputUTXOs = outputUTXOs);
    this.fee = 0;
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
    this.inputUTXOs.forEach((i) => {
      i.spend();
    });

    this.outputUTXOs.forEach((i) => {
      i.spend();
    });
    this.fee = totalInput - totalOutput;
  }
}

module.exports = Transaction;
