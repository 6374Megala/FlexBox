function flipCoin() {
    const random = Math.floor(Math.random() * 2);
    return (random === 0) ? "Heads" : "Tails";
  }
  
  const result = flipCoin();
  
  console.log(`The coin landed on: ${result}`);