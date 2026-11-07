export function sortBooks(books, sortBy) {
  const sortedBooks = [...books];
  if (sortBy === "title") {
    sortedBooks.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  } else if (sortBy === "author") {
    sortedBooks.sort((a, b) => {
      return a.author.localeCompare(b.author);
    });
  } else if (sortBy === "year") {
    sortedBooks.sort((a, b) => {
      if (a.year === "" && b.year === "") return 0;
      if (a.year === "") return 1;
      if (b.year === "") return -1;

      return a.year - b.year;
    });
  }

  return sortedBooks;
}
