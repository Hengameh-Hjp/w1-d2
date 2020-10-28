var input = process.argv[2];
const diceRoller = function(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    let rand = Math.floor(1 + Math.random()*6);
    result.push(rand);
  }
  return result.join();
}

console.log(diceRoller(Number(input)))