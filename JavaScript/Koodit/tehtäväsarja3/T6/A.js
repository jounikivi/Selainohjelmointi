function getRandomIntegerFromRange(startRange, endRange) {
  if (!Number.isInteger(startRange) || !Number.isInteger(endRange)) {
    throw new Error("Both arguments must be integers");
  }

  if (startRange > endRange) {
    throw new Error("startRange must be less than or equal to endRange");
  }

  const min = Math.ceil(startRange);
  const max = Math.floor(endRange);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = getRandomIntegerFromRange(1, 10);
console.log(randomNum); // This will print a random integer between 1 and 10 (inclusive)
