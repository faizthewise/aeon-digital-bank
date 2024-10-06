const twoSum = (numbers, target) => {
  let lowestIndex = 0;
  let highestIndex = numbers.length - 1;

  while (lowestIndex < highestIndex) {
    let result = numbers[lowestIndex] + numbers[highestIndex];

    if (result === target) return [lowestIndex + 1, highestIndex + 1];
    else if (result < target) lowestIndex++;
    else highestIndex--;
  }
};

console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));
