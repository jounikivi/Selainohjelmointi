// Funktio, joka tarkistaa onko vuosi karkausvuosi
function isLeapYear(vuosi) {
  // Vuosi on karkausvuosi, jos se on jaollinen neljällä, mutta ei jaollinen sadalla,
  // tai se on jaollinen 400:lla.
  return (vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0;
}


// Tein tähän kohtaan tämän Catching the error outside the function
// Funktio, joka yrittää tarkistaa onko vuosi karkausvuosi ja heittää virheen, jos virhe tapahtuu.
function tryIsLeapYear(vuosi) {
  // Yritetään tarkistaa onko vuosi karkausvuosi.
  try {
    return isLeapYear(vuosi);
  } catch (virhe) {
    // Jos virhe tapahtuu, heitetään virhe eteenpäin.
    throw virhe;
  }
}

// Funktio, joka tarkistaa onko vuosi karkausvuosi ja näyttää tuloksen sivulla.
function checkYear() {
  // Haetaan syötetyn vuoden arvo.
  const vuosi = document.getElementById("yearInput").value;

  // Haetaan tuloksen näyttämiseen tarkoitettu elementti.
  const resultDiv = document.getElementById("result");

  // Tarkistetaan onko vuosi karkausvuosi kutsumalla tryIsLeapYear-funktiota.
  try {
    const onKarkausvuosi = tryIsLeapYear(vuosi);

    // Jos tryIsLeapYear-funktio heitti virheen, tulostetaan virheviesti sivulle.
    if (onKarkausvuosi === undefined) {
      resultDiv.innerText = "Tapahtui virhe.";
    } else {
      // Näytetään tulos sivulla.
      resultDiv.innerText = `Vuosi ${vuosi} on ${onKarkausvuosi ? '' : 'ei '}karkausvuosi.`;
    }
  } catch (virhe) {
    // Näytetään virheviesti sivulle.
    resultDiv.innerText = virhe.message;
  }
}
