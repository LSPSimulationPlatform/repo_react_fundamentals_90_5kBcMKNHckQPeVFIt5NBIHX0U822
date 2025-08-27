import React, { useState } from "react";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import UserList from "./pages/UserList";
import MenuPage from "./pages/MenuPage";
import UserLoan from "./pages/UserLoan";
import BookCreate from "./pages/BookCreate";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [activePage, setActivePage] = useState("menu");
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell", year: 1949, status: "available", description: "Dystopian novel about totalitarianism." },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, status: "borrowed", description: "Classic novel exploring race and justice." },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, status: "available", description: "Novel about wealth and the American Dream." },
    { id: 4, title: "Clean Code", author: "Robert C. Martin", year: 2008, status: "available", description: "A handbook of agile software craftsmanship, focusing on writing clean, readable, and maintainable code." }
  ]);
  const [loans, setLoans] = useState([
    { id: 1, userId: 1, book_title: "To Kill a Mockingbird", borrowed_at: "2025-08-01", returned_at: null },
  ]);

  const borrowBook = (bookId) => {
    const book = books.find((b) => b.id === bookId);
    if (book && book.status === "available") {
      setBooks((prev) =>
        prev.map((b) =>
          b.id === bookId ? { ...b, status: "borrowed" } : b
        )
      );
      setLoans((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          userId: 1,
          book_title: book.title,
          borrowed_at: new Date().toISOString().slice(0, 10),
          returned_at: null,
        },
      ]);
      alert(`🎉 Book borrowed successfully! (book_id: ${bookId}, user_id: 1)`);
      setSelectedBook(null);
    } else {
      alert("Book is not available!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => { setActivePage("menu"); setSelectedBook(null); }}>🏠 Menu</button>
        <button onClick={() => { setActivePage("books"); setSelectedBook(null); }}>📚 Books</button>
        <button onClick={() => { setActivePage("users"); setSelectedBook(null); }}>👤 Users</button>
        <button onClick={() => { setActivePage("loans"); setSelectedBook(null); }}>📖 Loan History</button>
        <button onClick={() => { setActivePage("create"); setSelectedBook(null); }}>➕ Create Book</button>
      </nav>
      {activePage === "menu" && <MenuPage setActivePage={setActivePage} />}
      {activePage === "books" && (
        selectedBook ? 
          <BookDetails book={selectedBook} onBorrow={borrowBook} onBack={() => setSelectedBook(null)} /> :
          <BookList books={books} onViewDetails={setSelectedBook} setActivePage={setActivePage} />
      )}
      {activePage === "users" && <UserList setActivePage={setActivePage} />}
      {activePage === "loans" && <UserLoan loans={loans} setLoans={setLoans} setActivePage={setActivePage} />}
      {activePage === "create" && <BookCreate books={books} setBooks={setBooks} setActivePage={setActivePage} />}
    </div>
  );
}

export default App;