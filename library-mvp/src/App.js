import React, { useState } from "react";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import UserList from "./pages/UserList";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showUsers, setShowUsers] = useState(false);

  const books = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949, status: "available", description: "Dystopian novel about totalitarianism." },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, status: "borrowed", description: "Classic novel exploring race and justice." },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, status: "available", description: "Novel about wealth and the American Dream." },
  ];

  const borrowBook = (bookId) => {
    alert(`🎉 Book borrowed successfully! (book_id: ${bookId}, user_id: 5)`);
    setSelectedBook(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => { setShowUsers(false); setSelectedBook(null); }}>📚 Books</button>
        <button onClick={() => { setShowUsers(true); setSelectedBook(null); }}>👤 Users</button>
      </nav>

      {showUsers ? (
        <UserList />
      ) : selectedBook ? (
        <BookDetails book={selectedBook} onBorrow={borrowBook} onBack={() => setSelectedBook(null)} />
      ) : (
        <BookList books={books} onViewDetails={setSelectedBook} />
      )}
    </div>
  );
}

export default App;
