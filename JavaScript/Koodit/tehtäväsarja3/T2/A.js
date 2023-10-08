const musician = {
  name: "Sting",
  realName: "Gordon Matthew Thomas Sumner",
  instrument: {
    type: "bass",
  },
};

const { name, instrument } = musician;

console.log(name); // Output: Sting
console.log(instrument); // Output: { type: 'bass' }
