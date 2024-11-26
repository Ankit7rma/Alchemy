class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    (this.inputUTXOs = inputUTXOs), (this.outputUTXOs = outputUTXOs);
  }
  execute() {
    this.inputUTXOs.forEach((i) => {
      const { spent } = i;
      if (spent) {
        throw Error("Already Spent ");
      }
    });
  }
}

module.exports = Transaction;
