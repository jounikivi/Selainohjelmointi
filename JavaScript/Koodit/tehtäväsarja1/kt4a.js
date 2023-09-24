var distances = [104, 523, 248, 12, 81, 181, 34];
var sum = 0;

//for (var i = 0; i < distances.length; i++) {
for (var distances of distances) {
  //sum += distances[i];
  sum += distances;
}
//console.log("summa perus for-silmukalla", sum);
console.log("summa for of -silmukalla", sum);
