function getTimeDifferenceInFullDays(startDate, endDate) {
  // Convert both dates to milliseconds since the Unix epoch
  const startMillis = startDate.getTime();
  const endMillis = endDate.getTime();

  // Calculate the time difference in milliseconds
  const timeDifferenceMillis = endMillis - startMillis;

  // Calculate the number of full days by dividing by milliseconds in a day (24 * 60 * 60 * 1000)
  const fullDays = Math.floor(timeDifferenceMillis / (24 * 60 * 60 * 1000));

  return fullDays;
}

// Example usage:
const startDate = new Date("2023-10-01");
const endDate = new Date("2023-10-10");
const daysDifference = getTimeDifferenceInFullDays(startDate, endDate);
console.log(daysDifference); // This will print the number of full days between the two dates
