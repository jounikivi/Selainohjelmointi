function isLeapYear(vuosi) {
  if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function checkYear() {
  var vuosi = document.getElementById("yearInput").value;
  var resultDiv = document.getElementById("result");

  try {
    if (isLeapYear(vuosi)) {
      resultDiv.innerText = "Vuosi " + vuosi + " on karkausvuosi";
    } else {
      resultDiv.innerText = "Vuosi " + vuosi + " ei ole karkausvuosi";
    }
  } catch (e) {
    // Virheen käsittely.
    if (e.name === "TypeError") {
      resultDiv.innerText = "Syötä kelvollinen vuosi.";
    } else {
      resultDiv.innerText = "Tapahtui virhe: " + e.message;
    }
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
