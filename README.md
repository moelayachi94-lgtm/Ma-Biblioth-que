# 📚 Ma Bibliothèque

A lightweight Single Page Application (SPA) built with modern JavaScript to manage a personal book collection.

## 📖 Project Overview

Ma Bibliothèque allows users to organize and manage their personal library directly in their browser, without requiring an account or a backend.

Users can add, view, search, sort, edit, and delete books. All book information is saved locally using the browser's `localStorage`, so the collection remains available after refreshing the page.

## Features

### Book Management (CRUD)
- **Add books:** Create new books with a title, author, publication year, genre, reading status, and description.
- **Display books:** View all books in a collection.
- **Edit books:** Update the information of an existing book.
- **Delete books:** Remove books after confirmation.

### Search and Sorting
- Search books by title or author in real time.
- Sort books alphabetically by title.
- Sort books alphabetically by author.
- Sort books by publication year.

### Form Validation
- Title is required.
- Author is required.
- Client-side validation prevents adding books with missing required information.

### Local Data Persistence
- Save books using `localStorage`.
- Convert JavaScript data using `JSON.stringify()`.
- Retrieve saved data using `JSON.parse()`.
- Automatically load the collection when the application starts.

## 🛠️ Technologies Used

- **HTML5:** Page structure and forms.
- **CSS3:** Styling.
- **Tailwind CSS v4:** Utility-first CSS framework.
- **JavaScript ES6+:** Application logic and interactions.
- **DOM Manipulation:** Dynamic creation and display of book cards.
- **localStorage:** Local data persistence.
- **ES6 Modules:** Organizing JavaScript code using `import` and `export`.

## 📁 Project Structure

```text
book-library/
│
├── index.html
│
├── assets/
│   └── style.css
│
├── src/
│   ├── input.css
│   │
│   └── js/
│       ├── app.js
│       ├── data.js
│       ├── functions.js
│       ├── storage.js
│       └── ui.js
│
├── package.json
└── README.md
```

### JavaScript Modules

| File | Responsibility |
|---|---|
| `app.js` | Application entry point. Loads saved books and displays them. |
| `data.js` | Initializes and exports the books array. |
| `storage.js` | Handles saving and loading books using localStorage. |
| `functions.js` | Contains the sorting function. |
| `ui.js` | Handles DOM manipulation, form submission, rendering, searching, editing, and deleting books. |

## 📚 Book Data Structure

Each book is represented by a JavaScript object:

```javascript
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "fantasy",
    status: "to-read",
    description: "A fantasy adventure novel."
};
```

### Book Properties

| Property | Type | Description |
|---|---|---|
| `title` | String | Book title (required) |
| `author` | String | Book author (required) |
| `year` | Number | Publication year (optional) |
| `genre` | String | Book genre |
| `status` | String | Reading status |
| `description` | String | Book description |

Available reading statuses:
- `to-read`
- `reading`
- `read`

## 🚀 Installation and Setup

### 1. Clone the project

```bash
git clone YOUR_REPOSITORY_URL
```

Replace `YOUR_REPOSITORY_URL` with your GitHub repository URL.

### 2. Navigate to the project

```bash
cd book-library
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start Tailwind CSS in watch mode

```bash
npm run dev
```

This command watches your CSS source file and automatically generates `assets/style.css` when changes are detected.

Keep the terminal running while developing.

**Windows PowerShell note:** If PowerShell blocks `npm`, use:

```bash
npm.cmd run dev
```

### 5. Open the application

Use the VS Code Live Server extension to open `index.html` in your browser.

**Note:** The collection is stored locally in the browser. Clearing the browser's local storage will remove the saved books.

## 🎯 Project Objectives

This project was developed to practice:

- JavaScript ES6+ fundamentals.
- ES6 modular architecture.
- DOM manipulation and event handling.
- Array methods and data manipulation.
- Form handling and client-side validation.
- CRUD operations.
- Browser local storage.
- Git and collaborative development workflows.

---


**Ma Bibliothèque — Organize your books, manage your collection, and keep track of your reading journey.**