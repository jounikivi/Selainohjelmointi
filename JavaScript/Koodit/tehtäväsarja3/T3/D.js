// Create two musician objects
const musician1 = {
  stageName: "Sting",
  realName: "Gordon Matthew Thomas Sumner",
  instrument: "Bass guitar, vocals",
  genre: "Rock",
};

const musician2 = {
  stageName: "Prince",
  realName: "Prince Rogers Nelson",
  instrument: "Various instruments, vocals",
  genre: "Funk, Pop, R&B",
};

// Put both musician objects into an array
const musiciansArray = [musician1, musician2];

// Example of using Object.entries with the array
console.log("Using Object.entries:");
for (const musician of musiciansArray) {
  const entries = Object.entries(musician);
  console.log(entries);
}

// Example of using Object.keys with the array
console.log("\nUsing Object.keys:");
for (const musician of musiciansArray) {
  const keys = Object.keys(musician);
  console.log(keys);
}

// Example of using Object.values with the array
console.log("\nUsing Object.values:");
for (const musician of musiciansArray) {
  const values = Object.values(musician);
  console.log(values);
}
