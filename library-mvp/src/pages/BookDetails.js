import React from "react";

function BookDetails({ book, onBorrow, onBack }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📖 Book Details</h1>
      <p><b>Title:</b> {book.title}</p>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Publication Year:</b> {book.year}</p>
      <p><b>Description:</b> {book.description}</p>

      <button
        style={{
          padding: "10px 20px",
          background: "#28a745",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
        onClick={() => onBorrow(book.id)}
      >
        Borrow This Book
      </button>

      <button
        style={{
          padding: "10px 20px",
          background: "#6c757d",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={onBack}
      >
        Back to List
      </button>
    </div>
  );
}

export default BookDetails;
