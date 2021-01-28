function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.revised = false;
}

Book.prototype.summary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.bookAge = function() {
  const years = new Date().getFullYear() - this.year

  switch(years) {
    case 0:
      return `${this.title} is less than 1 year old.`
    case 1:
      return `${this.title} is 1 year old.`
    default:
      return `${this.title} is ${years} years old.`
  }
}

Book.prototype.revise = function(year) {
  this.year = year;
  this.revised = true;
}

const book1 = new Book('Book1', 'Joakim', 2011);
const book2 = new Book('Book2', 'Hans', 2020);
const book3 = new Book('Book3', 'Jeanette', 1997);
// console.log(book1.summary())

console.log(book1.bookAge());
console.log(book2.bookAge());
console.log(book3.bookAge());
book3.revise(2021)
console.log(book3.bookAge());

console.log(book3)