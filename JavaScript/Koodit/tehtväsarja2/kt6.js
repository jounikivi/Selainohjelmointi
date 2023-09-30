var book = {
  isbn: "548-0123456789",
  name: "Tämä on kirja",
  authors: ["Matti Meikäläinen", "Maisa Meikäläinen"],
  publicationDate: "2023-09-30",

  // Metodi saadaksesi kirjailijat
  getAuthors: function () {
    return this.authors;
  },

  // Metodi asettaaksesi kirjailijat
  setAuthors: function (newAuthors) {
    this.authors = newAuthors;
  },

  // Metodi saadaksesi ISBN
  getIsbn: function () {
    return this.isbn;
  },

  // Metodi asettaaksesi ISBN
  setIsbn: function (newIsbn) {
    this.isbn = newIsbn;
  },
};

console.log(book.name);
console.log(book.authors[0]);
