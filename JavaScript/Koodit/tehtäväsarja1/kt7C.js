const points = [64, 56, 48, 12, 81, 91, 34, 19, 95, 55];

// Käytetään reduce-metodia laskeaksemme arvopisteiden summa
const sum = points.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Aloitetaan kertymä nollasta

// Lasketaan keskiarvo jakamalla summa arvopisteiden määrällä
const average = sum / points.length;

// Tulostetaan keskiarvo
console.log(`Arvopisteiden keskiarvo: ${average}`);
