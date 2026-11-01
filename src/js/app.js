import { renderbook } from "./ui.js";
import { books } from "./data.js";
import { loadBooks } from "./storage.js";
books.push(...loadBooks())
renderbook(books)