//esimerkit String metodin käytöst

// 1 Substring-metodi
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

/*Esimerkki tehtävään 3 b
var määrä = 36.5;
var text1 = "Minulla on";
var text2 = " eruoa";
var tulos = `${text1} ${määrä}${text2}`;
var tulos = text1 + määrä + text2;
console.log(tulos);*/
