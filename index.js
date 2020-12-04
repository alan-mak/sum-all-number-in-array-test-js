function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for(let number of array) {
    if(Array.isArray(number)) {
      number = sumItems(number);
    }
    sum += number;
  }
  return sum;
}
module.exports = sumItems;

sumItems([1, [3, 3], 5, 5])