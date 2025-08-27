import React, { useState } from "react";

function BookList({ books, onViewDetails, setActivePage }) {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f4f4f4 0%, #e3f0ff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "48px",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.85)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px 0 rgba(31,38,135,0.10)",
          padding: "36px 32px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: "2rem", color: "#222", marginBottom: 18 }}>
          📚 Library Book List
        </h1>

        <input
          type="text"
          placeholder="Search by Title or Author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "320px",
            marginBottom: "28px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #d0d7e2",
            outline: "none",
            boxShadow: "0 1px 4px rgba(0,123,255,0.05)",
            transition: "border 0.2s",
          }}
        />

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr style={{ background: "#e3f0ff" }}>
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
                  <tr
                    key={book.id}
                    style={{
                      background: "#fff",
                      transition: "background 0.18s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#f0f7ff")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                  >
                    <td style={tdStyle}>{book.title}</td>
                    <td style={tdStyle}>{book.author}</td>
                    <td style={tdStyle}>{book.year}</td>
                    <td style={tdStyle}>
                      {book.status === "available" ? (
                        <span style={{ color: "#28a745", fontWeight: 600 }}>✅ Available</span>
                      ) : (
                        <span style={{ color: "#dc3545", fontWeight: 600 }}>❌ Borrowed</span>
                      )}
                    </td>
                    <td style={tdStyle}>
                      <button
                        style={btnStyle}
                        onClick={() => onViewDetails(book)}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "#0056b3";
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,123,255,0.18)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "#007bff";
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,123,255,0.08)";
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "18px", color: "#888" }}>
                    No books found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => setActivePage("menu")}
          style={{
            marginTop: "28px",
            width: "100%",
            padding: "10px 0",
            background: "#f8fbff",
            color: "#185a9d",
            border: "1px solid #d0d7e2",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.18s, color 0.18s, transform 0.18s",
            outline: "none",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#185a9d";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#f8fbff";
            e.currentTarget.style.color = "#185a9d";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ← Back to Menu
        </button>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "14px 10px",
  textAlign: "left",
  fontWeight: 700,
  color: "#185a9d",
  borderBottom: "2px solid #d0d7e2",
  fontSize: "1.05rem",
};

const tdStyle = {
  padding: "12px 10px",
  borderBottom: "1px solid #e3eaf2",
  fontSize: "1rem",
};

const btnStyle = {
  padding: "8px 18px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,123,255,0.08)",
  transition: "background 0.18s, transform 0.18s, box-shadow 0.18s",
  outline: "none",
  letterSpacing: "0.01em",
};

export default BookList;