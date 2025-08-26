import React, { useState } from "react";

function BookList({ books, onViewDetails }) {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Library Book List</h1>

      <input
        type="text"
        placeholder="Search by Title or Author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Author</th>
            <th style={thStyle}>Publication Year</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <tr key={book.id}>
                <td style={tdStyle}>{book.title}</td>
                <td style={tdStyle}>{book.author}</td>
                <td style={tdStyle}>{book.year}</td>
                <td style={tdStyle}>
                  {book.status === "available" ? "✅ Available" : "❌ Borrowed"}
                </td>
                <td style={tdStyle}>
                  <button
                    style={btnStyle}
                    onClick={() => onViewDetails(book)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = { border: "1px solid #ddd", padding: "10px", textAlign: "left" };
const tdStyle = { border: "1px solid #ddd", padding: "10px" };
const btnStyle = {
  padding: "6px 12px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default BookList;