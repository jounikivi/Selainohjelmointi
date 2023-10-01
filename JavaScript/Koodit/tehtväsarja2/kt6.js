var book1 = {
  isbn: "548-0123456789",
  name: "Tämä on kirja",
  authors: ["Matti Meikäläinen", "Maisa Meikäläinen"],
  publicationDate: "2023-09-30",
};

var book2 = {
  isbn: "548-0123456789",
  name: "Tämä on kirja",
  authors: ["Matti Meikäläinen", "Maisa Meikäläinen"],
  publicationDate: "2023-09-30",
};

if (book1 === book2) {
  console.log("Nämä kaksi kirjaoliota ovat identtisiä");
} else {
  console.log("Nämä kaksi kirjaoliota eivät ole identtisiä");
}

/*
var book1 = {
  isbn: "548-0123456789",
  name: "Kirja",
  authors: ["Maisa Meikäläinen"],
  publicationDate: "2023-09-30",
};

var book2 = {
  isbn: "858-9876543210",
  name: "Kirja 2",
  authors: ["Matti Meikäläinen"],
  publicationDate: "2023-10-1",
};

if (book1.isbn === book2.isbn) {
  console.log("Samat kirjan kuvaajat");
} else {
  console.log("Eri kirjat kuvaajat");
}


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
*/
