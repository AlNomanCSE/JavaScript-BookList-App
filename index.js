const StoreBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0-06-112008-4",
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "978-0-452-28423-4",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0-7432-7356-5",
  },
];
//?----------------UI class----------------//

class UI {
  static displayBooks() {
    const books = StoreBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>Yes</td>
        <td>Yes</td>
       `;
    list.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks());
