const points = [64, 56, 48, 12, 81, 91, 34, 19, 95, 55];

const grades = points.map((point) => {
  if (point >= 85) {
    return 5;
  } else if (point >= 70) {
    return 4;
  } else if (point >= 50) {
    return 2;
  } else if (point >= 40) {
    return 1;
  } else {
    return 0;
  }
});

console.log(grades); // This will display the new array of grades.
