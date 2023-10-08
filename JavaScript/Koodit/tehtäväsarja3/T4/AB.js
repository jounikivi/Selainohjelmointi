// A ja B Kohta samassa
const song = {
  name: "My Song",
  _duration: 0,

  get duration() {
    const minutes = Math.floor(this._duration / 60);
    const seconds = this._duration % 60;
    return `${minutes}:${seconds}`;
  },

  set duration(value) {
    const [minutes, seconds] = value.split(":").map(Number);
    this._duration = minutes * 60 + seconds;
  },
};

// tässä kohta B

// Aseta kesto (3 minuuttia ja 45 sekuntia)
song.duration = "3:45";
// Hae kesto
console.log(song.duration); // Tulostaa '3:45'
