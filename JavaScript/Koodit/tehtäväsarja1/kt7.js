document.addEventListener("DOMContentLoaded", function () {
  // Alkuperäinen array pisteistä
  const points = [64, 56, 48, 12, 81, 91, 34, 19, 95, 55];

  // a. Luo uusi array, joka sisältää pisteet, jotka ovat vähintään 40 käyttäen filter-metodia
  const enough_points = points.filter((point) => point >= 40);

  // b. Luo uusi array, joka sisältää arvosanat pisteiden perusteella käyttäen map-metodia
  const grades = points.map((point) => {
    if (point >= 85) return 5;
    else if (point >= 70) return 4;
    else if (point >= 60) return 3;
    else if (point >= 50) return 2;
    else if (point >= 40) return 1;
    else return 0;
  });

  // c. Laske keskiarvoarvosana reduce-metodia käyttäen
  const sumOfGrades = grades.reduce((total, grade) => total + grade, 0);
  const averageGrade = sumOfGrades / grades.length;

  // Näytä tulokset HTML-sivulla
  document.getElementById("enough-points").textContent =
    enough_points.join(", ");
  document.getElementById("grades").textContent = grades.join(", ");
  document.getElementById("average-grade").textContent =
    averageGrade.toFixed(2);
});
