import { books } from "./data.js";
import { saveBooks } from "./storage.js";
import { sortBooks } from "./functions.js";
export const showForm = document.getElementById("ajouter-btn");
const bookForm = document.getElementById("book-form");
export const form = document.getElementById("form-ajout");
export const saveBook = document.getElementById("submit-button");
export const collection = document.getElementById("empty-state");
export const livre = document.getElementById("books-list");
const titleError = document.getElementById("title-error");
const authorError = document.getElementById("author-error");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
let editingIndex = null;

showForm.addEventListener("click", (e) => {
  form.classList.toggle("hidden");
});
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filterBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
  });

  renderbook(filterBooks);
});
sortSelect.addEventListener("change", () => {
  const sortedBooks = sortBooks(books, sortSelect.value);
  renderbook(sortedBooks);
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
  if (editingIndex === null) {
    books.push(book);
  } else {
    books[editingIndex] = book;
    editingIndex = null;
  }

  saveBooks(books);
  renderbook(books);
  bookForm.reset();
});

export function renderbook(booksToDisplay) {
  livre.innerHTML = "";

  collection.classList.toggle("hidden", booksToDisplay.length > 0);

  booksToDisplay.forEach((book) => {
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

    const editButton = document.createElement("button");
    editButton.textContent = "Modifier";
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.dataset.index = books.indexOf(book);
    editButton.className =
      "rounded-lg bg-emerald-800 px-4 py-2 text-white cursor-pointer";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Supprimer";
    removeButton.type = "button";
    removeButton.dataset.action = "remove";
    removeButton.dataset.index = books.indexOf(book);
    removeButton.className =
      "rounded-lg bg-red-700 px-4 py-2 text-white cursor-pointer";

    const actions = document.createElement("div");
    actions.className = "mt-4 flex gap-3";

    actions.append(editButton, removeButton);
    article.append(titre, author, genre, anneer, status, description, actions);

    livre.appendChild(article);
  });
}

livre.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");

  if (!button) return;

  if (button.dataset.action === "remove") {
    const index = Number(button.dataset.index);

    const confirmation = confirm("Voulez-vous vraiment supprimer ce livre ?");

    if (!confirmation) return;

    books.splice(index, 1);

    saveBooks(books);

    renderbook(books);
  }
  if (button.dataset.action === "edit") {
    const index = Number(button.dataset.index);

    const book = books[index];

    editingIndex = index;

    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("year").value = book.year;
    document.getElementById("genre").value = book.genre;
    document.getElementById("status").value = book.status;
    document.getElementById("description").value = book.description;

    form.classList.remove("hidden");
  }
});
