/*const musician = {
  realName: "Gordon Matthew Thomas Sumner",
  name: "Sting",
  instrument: {
    type: "bass",
  },
};

for (const property in musician) {
  console.log(`${property}: ${musician[property]}`);
}*/

/*function summa(...numerot) {
  let tulos = 0;
  for (let numero of numerot) {
    tulos += numero;
  }
  return tulos;
}

console.log(summa(9, 8, 7, 6));
console.log(summa(51, 10));
console.log(summa());
*/

/*function tervehdi(nimi = "Matti Meikäläinen") {
  console.log("hei," + nimi + "!");
}
tervehdi();
tervehdi("Pekka Puupää");
*/
/*
var taulukko1 = [1, 2];
var taulukko2 = [3, 4];
var yhdistetty = taulukko1.concat(taulukko2); // Luo uuden taulukon 'yhdistetty' ilman että 'taulukko1' tai 'taulukko2' muuttuvat
console.log(yhdistetty); // Tuloste: [1, 2, 3, 4]
console.log(taulukko1); // Tuloste: [1, 2] (alkuperäinen 'taulukko1' säilyy muuttumattomana)
console.log(taulukko2); // Tuloste: [3, 4] (alkuperäinen 'taulukko2' säilyy muuttumattomana)
*/

/*
// Luodaan taulukko 'autot' ja alustetaan se kahdella merkkijonolla
var autot = ["opel", "mersu"];
// Käytetään 'push'-metodia lisäämään "mazda" taulukon loppuun
autot.push("mazda");
// Tulostetaan muokattu 'autot'-taulukko
console.log(autot);

//esimerkit String metodin käytöst
/* 1 Substring-metodi
const esimString1 = "Hello World;";
const Substring = esimString1.substring(0, 6);
console.log(Substring);

//  2 Lowercase-metodi:
const esimString2 = "ISO KIRJAIMET PIENEKSI KIRJAIMIKSI";
const pientkirjaimet = esimString2.toLowerCase();
console.log(pientkirjaimet);

// 3 Stringin haku ja korvaaminen
const lause = "Aku Ankka ja Roopa setä asuu ankkalinassa ";
const etsittavaSana = "asuu";
const korvaaSana = "asuvat";
const muokattuLause = lause.replace(etsittavaSana, korvaaSana);
console.log(lause);
console.log(muokattuLause);

/*
Esimerkki tehtävään 3 b
var määrä = 36.5;
var text1 = "Minulla on";
var text2 = " eruoa";
var tulos = `${text1} ${määrä}${text2}`;
var tulos = text1 + määrä + text2;
console.log(tulos);
*/
