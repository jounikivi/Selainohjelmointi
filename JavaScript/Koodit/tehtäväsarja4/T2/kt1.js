// Funktio, joka tarkistaa onko vuosi karkausvuosi
function isLeapYear(year) {
  // Vuosi on karkausvuosi, jos se on jaollinen neljällä, mutta ei jaollinen sadalla,
  // tai se on jaollinen 400:lla.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Funktio, joka yrittää tarkistaa onko vuosi karkausvuosi ja palauttaa undefined, jos virhe tapahtuu.
function tryIsLeapYear(year) {
  // Yritetään tarkistaa onko vuosi karkausvuosi.
  try {
    return isLeapYear(year);
  } catch (error) {
    // Jos virhe tapahtuu, tulostetaan virheviesti konsoliin ja palautetaan undefined.
    console.log(error.message);
    return undefined;
  }
}

// Funktio, joka tarkistaa onko vuosi karkausvuosi ja näyttää tuloksen sivulla.
function checkYear() {
  // Haetaan syötetyn vuoden arvo.
  const year = document.getElementById("yearInput").value;

  // Haetaan tuloksen näyttämiseen tarkoitettu elementti.
  const resultDiv = document.getElementById("result");

  // Tarkistetaan onko vuosi karkausvuosi yrittämällä kutsua tryIsLeapYear-funktiota.
  const isLeapYear = tryIsLeapYear(year);

  // Jos tryIsLeapYear-funktio palautti undefined, tapahtui virhe.
  if (isLeapYear === undefined) {
    // Näytetään virheviesti sivulla.
    resultDiv.innerText = "An error occurred.";
  } else {
    // Näytetään tulos sivulla.
    resultDiv.innerText = `Year ${year} is ${isLeapYear ? '' : 'not'} a leap year.`;
  }
}
