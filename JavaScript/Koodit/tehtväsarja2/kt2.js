// Määritellään funktioilmaisin
var containsNumber = function (taulukko, etsittavaNumero) {
  for (var i = 0; i < taulukko.length; i++) {
    if (taulukko[i] === etsittavaNumero) {
      return true;
    }
  }
  return false;
};

// Testataan funktiota
var numerotaulukko = [6, 4, 2, 5, 9, 7, 5, 7, 2];
var etsittavaNumero = 9;

var tulosElementti = document.getElementById("tulos");

if (containsNumber(numerotaulukko, etsittavaNumero)) {
  tulosElementti.textContent = "Taulukko sisältää numeron " + etsittavaNumero;
} else {
  tulosElementti.textContent = "Taulukko ei sisällä numeroa " + etsittavaNumero;
}
