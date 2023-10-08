const musician = {
  name: "Sting",
  realName: "Gordon Matthew Thomas Sumner",
  instrument: {
    type: "bass",
  },
};

// Object destructuring to read the 'type' property into a variable
const {
  instrument: { type: instrumentTypeOfArtist },
} = musician;

console.log(instrumentTypeOfArtist); // 'bass'
