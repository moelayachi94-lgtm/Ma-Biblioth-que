import { renderbook } from "./ui.js";
import { books } from "./data.js";
import { loadBooks } from "./storage.js";

books.splice(0, books.length, ...loadBooks());

renderbook(books);