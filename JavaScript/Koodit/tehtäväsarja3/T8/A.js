class ZipValidator {
  static isValidZip(zipCode) {
    // Tarkistetaan, että zipCode sisältää tasan viisi numeroa
    const regex = /^\d{5}$/;
    return regex.test(zipCode);
  }

  static fixZip(zipCode) {
    // Jos zipCode on alle viiden merkin pituinen, lisätään etunollia
    while (zipCode.length < 5) {
      zipCode = "0" + zipCode;
    }
    return zipCode;
  }
}

// Kutsutaan staattisia metodeita
const zip1 = "12345";
const zip2 = "54321";
console.log(ZipValidator.isValidZip(zip1)); // Tulostaa true
console.log(ZipValidator.isValidZip(zip2)); // Tulostaa true

const shortZip = "123";
const fixedZip = ZipValidator.fixZip(shortZip);
console.log(fixedZip); // Tulostaa "00123"
