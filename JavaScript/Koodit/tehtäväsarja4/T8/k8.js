function rakennaRekisterinumero(theLetters, theDigits) {
  // Määritä säännölliset lausekkeet validointia varten
  const lettersRegex = /^[A-VX-Z]{2,3}$/; // kaksi tai kolme iso kirjainta, W ei ole sallittu
  const digitsRegex = /^[1-9]\d{0,2}$/; // yhdestä kolmeen numeroa ilman johtavia nollia

  // Validoi theLetters-argumentti
  if (!lettersRegex.test(theLetters)) {
      throw new Error("Virheelliset rekisterinumeron kirjaimet");
  }

  // Validoi theDigits-argumentti
  if (!digitsRegex.test(theDigits)) {
      throw new Error("Virheelliset rekisterinumeron numerot");
  }

  // Jos molemmat argumentit ovat valideja, muodosta ja palauta rekisterinumero
  return `${theLetters}-${theDigits}`;
}

// Esimerkit
try {
  const validiRekisterinumero = rakennaRekisterinumero("AX", "12");
  console.log("Validi rekisterinumero:", validiRekisterinumero);
} catch (error) {
  console.error("Virhe:", error.message);
}

try {
  const virheellinenRekisterinumero = rakennaRekisterinumero("X", "100");
  console.log("Validi rekisterinumero:", virheellinenRekisterinumero);
} catch (error) {
  console.error("Virhe:", error.message);
}
