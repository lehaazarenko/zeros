module.exports = function getZerosCount(number) {
  // your implementation
  let result = 0;
  
  function calc(num, x) {
    let count = 0;
    while (num > x) {
      num -= x;
      count++;
    }
    return count;
  } 
  
  for (let i = 1; i < 12; i++) {
  	let temp = Math.pow(5,i);
    result += calc(number, temp);
    if (number % temp === 0) {
      result++;
    }
  }
  
  return result;
}