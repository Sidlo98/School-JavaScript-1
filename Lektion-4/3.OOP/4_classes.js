class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;
  }
  summary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  bookAge() {
    const years = new Date().getFullYear() - this.year

    switch(years) {
      case 0:
        return `${this.title} is less than 1 year old.`
      case 1:
        return `${this.title} is 1 year old.`
      default:
        return `${this.title} is ${years} year old.`
    }
  }
  revise(year) {
    this.year = year;
    this.revised = true;
  }
}

const book1 = new Book('book1', 'Joakim', 2020);
const book2 = new Book('book2', 'Jeanette', 1997);
const book3 = new Book('book3', 'Hans', 2010);


let books = [book1,book2,book3]
console.log(books);

console.log(book2.bookAge());
book2.revise(2020);
console.log(book2.bookAge());