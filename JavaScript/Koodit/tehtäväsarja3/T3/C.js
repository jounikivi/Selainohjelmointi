const musician = {
  stageName: "Sting",
  realName: "Gordon Matthew Thomas Sumner",
  instrument: "Bass guitar, vocals",
  genre: "Rock",
};

for (const attribute in musician) {
  console.log(`${attribute} = ${musician[attribute]}`);
}
