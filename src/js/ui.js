import { books } from "./data.js";
import { saveBooks } from "./storage.js";
export const showForm = document.getElementById("ajouter-btn");
const bookForm = document.getElementById("book-form");
export const form = document.getElementById("form-ajout");
export const saveBook = document.getElementById("submit-button");
export const collection = document.getElementById("empty-state");
export const livre = document.getElementById("books-list");
const titleError = document.getElementById("title-error");
const authorError = document.getElementById("author-error");

showForm.addEventListener("click", (e) => {
  form.classList.toggle("hidden");
});
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const year = document.getElementById("year");
  const genre = document.getElementById("genre");
  const status = document.getElementById("status");
  const description = document.getElementById("description");

  if (title.value.trim() === "" || author.value.trim() === "") {
    titleError.textContent =
      title.value.trim() === "" ? "Title is required" : "";
    authorError.textContent =
      author.value.trim() === "" ? "Author is required" : "";
    return;
  }

  let bookYear;

  if (year.value === "") {
    bookYear = "";
  } else {
    bookYear = Number(year.value);
  }

  const book = {
    title: title.value.trim(),
    author: author.value.trim(),
    year: bookYear,
    genre: genre.value,
    status: status.value,
    description: description.value.trim(),
  };

  books.push(book);
  saveBooks(books)
  renderbook(books);
  bookForm.reset();
});

export function renderbook(books) {
  livre.innerHTML = "";

  collection.classList.toggle("hidden", books.length > 0);

  books.forEach((book) => {
    const article = document.createElement("article");
    article.className =
      "mt-2 rounded-2xl border border-emerald-800 bg-white py-3 px-6 shadow-xl";

    const titre = document.createElement("h2");
    titre.textContent = book.title;
    titre.className =
      "font-['Newsreader',serif] text-2xl font-medium text-[#1C1B18] mt-2 leading-snug";

    const author = document.createElement("p");
    author.textContent = book.author;
    author.className = "text-sm text-[#78736A] mt-1 py-2 pl-3";

    const genre = document.createElement("p");
    genre.textContent = book.genre;
    genre.className =
      "inline-block rounded-full bg-[#E6EFEA] text-[#2C4A3E] px-3 py-2 text-xs font-medium";

    const anneer = document.createElement("p");
    anneer.textContent = book.year;
    anneer.className = "text-sm text-[#78736A] mt-1 pl-3 py-2";

    const status = document.createElement("p");
    status.textContent = book.status;
    status.className =
      "inline-block rounded-full bg-[#F2ECE1] text-[#78736A] px-2.5 py-1 text-[11px] font-medium";

    const description = document.createElement("p");
    description.textContent = book.description;
    description.className =
      "text-sm text-[#4A463F] mt-4 leading-relaxed line-clamp-3 pl-3";

    article.append(titre, author, genre, anneer, status, description);

    livre.appendChild(article);
  });
}
