function convertOuncesToGrams(mittaukset) {
  const UNSSIT_G = 28.3495;

  const muunnetutMittaukset = mittaukset.map((mittaus) => {
    if (mittaus.unit === "ounce") {
      const painoGrammoina = mittaus.weight * UNSSIT_G;
      const pyöristettyPaino = painoGrammoina.toFixed(2);
      return { ...mittaus, unit: "gram", weight: parseFloat(pyöristettyPaino) };
    } else {
      return mittaus;
    }
  });

  return muunnetutMittaukset;
}

const mittaukset = [
  { batchid: 434, unit: "ounce", weight: 12.21 },
  { batchid: 414, unit: "gram", weight: 199.54 },
  { batchid: 522, unit: "ounce", weight: 18.88 },
];

const muunnetutMittaukset = convertOuncesToGrams(mittaukset);
console.log(muunnetutMittaukset);
