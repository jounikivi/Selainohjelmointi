const points = [64, 56, 48, 12, 81, 91, 34, 19, 95, 55];

const grades = points.map((ptn) => {

  if (ptn >= 85) {
    return 5;
  }
  else if (ptn >=70) {
    return 4
  }
  else if (ptn >= 60) {
    return 2
  }else if (ptn >=50){
    return 1
  }
});
console.log(points)
console.log(grades);
