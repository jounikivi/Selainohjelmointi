const musician = {
  name: "Sting",
  realName: "Gordon Matthew Thomas Sumner",
  instrument: {
    type: "bass",
  },
};

// Object destructuring with a default value
const {
  instrument: { make: instrumentMakeOfArtist = "unknown" },
} = musician;

console.log(instrumentMakeOfArtist); // 'unknown' (since 'make' attribute is missing in the object)
