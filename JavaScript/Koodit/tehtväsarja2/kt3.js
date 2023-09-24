const convertToMinutesFormat = (hoursInHundredths) => {
  // Tarkista, onko syöte numero, ja jos ei ole, palauta virheviesti
  if (isNaN(hoursInHundredths)) {
    return "Invalid input";
  }

  // Muunna syöte desimaaliluvuksi
  const hoursFloat = parseFloat(hoursInHundredths);

  // Tarkista, onko syöte negatiivinen
  const isNegative = hoursFloat < 0;

  // Otetaan luku ilman desimaaleja
  const hours = Math.floor(Math.abs(hoursFloat));

  // Lasketaan desimaaliosan minuutit ja pyöristetään ne
  const minutes = Math.round((Math.abs(hoursFloat) - hours) * 60);

  // Muotoillaan tulosteksti
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Palautetaan tulos
  if (isNegative) {
    return `-${formattedHours}:${formattedMinutes}`;
  } else {
    return `${formattedHours}:${formattedMinutes}`;
  }
};

// Testausta varten voit kutsua funktiota eri syötteillä
console.log(convertToMinutesFormat(3.4)); // Tulostaa "03:24"
console.log(convertToMinutesFormat(-3.4)); // Tulostaa "-03:24"
console.log(convertToMinutesFormat("invalid")); // Tulostaa "Invalid input"
