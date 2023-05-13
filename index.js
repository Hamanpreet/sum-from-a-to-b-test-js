
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  let sum1 = 0;
  if ((fromN - toN) === 0) {
    return sum1 += fromN;
  }
  
  
  
  return fromN++ + sum(fromN, toN);
}
console.log(sum(2, 4));

module.exports = sum;