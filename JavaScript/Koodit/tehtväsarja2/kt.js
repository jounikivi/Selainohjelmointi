function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function checkYear() {
  var year = document.getElementById("yearInput").value;
  var resultDiv = document.getElementById("result");

  if (isLeapYear(year)) {
    resultDiv.innerText = "Year " + year + " is a leap year";
  } else {
    resultDiv.innerText = "Year " + year + " is not a leap year";
  }
}

/*function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2000));

//lyhyempi versio
function isLeapYearShort(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYearShort(2024)); // Tulostaa true, koska 2024 on karkausvuosi.
*/
