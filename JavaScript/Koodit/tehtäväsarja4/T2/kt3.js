// Funktio, joka tarkistaa onko vuosi karkausvuosi
function isLeapYear(year) {
  // Vuosi on karkausvuosi, jos se on jaollinen neljällä, mutta ei jaollinen sadalla,
  // tai se on jaollinen 400:lla.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Funktio, joka tarkistaa onko vuosi karkausvuosi ja heittää virheen, jos virhe tapahtuu.
function tryIsLeapYear(year) {
  // Yritetään tarkistaa onko vuosi karkausvuosi.
  try {
    return isLeapYear(year);
  } catch (error) {
    // Jos virhe tapahtuu, heitetään virhe eteenpäin.
    throw error;
  }
}

// Funktio, joka tarkistaa onko vuosi karkausvuosi ja näyttää tuloksen sivulla.
function checkYear() {
  // Haetaan syötetyn vuoden arvo.
  const year = document.getElementById("yearInput").value;

  // Haetaan tuloksen näyttämiseen tarkoitettu elementti.
  const resultDiv = document.getElementById("result");

  // Tarkistetaan onko vuosi karkausvuosi kutsumalla tryIsLeapYear-funktiota.
  try {
    const isLeapYear = tryIsLeapYear(year);

    // Jos tryIsLeapYear-funktio heitti virheen, tulostetaan virheviesti sivulle.
    if (isLeapYear === undefined) {
      resultDiv.innerText = "An error occurred.";
    } else {
      // Näytetään tulos sivulla.
      resultDiv.innerText = `Year ${year} is ${isLeapYear ? '' : 'not'} a leap year.`;
    }
  } catch (error) {
    // Näytetään virheviesti sivulle.
    resultDiv.innerText = error.message;
  }
}
