import React, { useState } from "react";

const BookCreate = ({ books, setBooks, setActivePage }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.max(...books.map((b) => b.id), 0) + 1,
      title: formData.title,
      author: formData.author,
      year: parseInt(formData.year),
      description: formData.description,
      status: "available",
    };
    setBooks((prev) => [...prev, newBook]);
    alert(`🎉 Book "${formData.title}" created successfully!`);
    setActivePage("books");
    setFormData({ title: "", author: "", year: "", description: "" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f4f4f4 0%, #e3f0ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.92)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px 0 rgba(31,38,135,0.10)",
          padding: "44px 36px",
          maxWidth: "440px",
          width: "100%",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: "2rem", color: "#185a9d", marginBottom: 18 }}>
          📖 Create New Book
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={labelStyle}>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="Enter book title"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={labelStyle}>Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="Enter author name"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={labelStyle}>Publication Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="e.g. 2025"
              min="0"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={labelStyle}>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ ...inputStyle, minHeight: "90px", resize: "vertical" }}
              placeholder="Write a short description..."
            />
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
            <button
              type="submit"
              style={submitBtnStyle}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#0056b3";
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,123,255,0.18)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#007bff";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,123,255,0.08)";
              }}
            >
              Create Book
            </button>
            <button
              type="button"
              onClick={() => setActivePage("books")}
              style={cancelBtnStyle}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#adb5bd";
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#6c757d";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        <button
          onClick={() => setActivePage("menu")}
          style={{
            marginTop: "24px",
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
};

const labelStyle = {
  fontWeight: 600,
  color: "#185a9d",
  fontSize: "1.08rem",
  marginBottom: "2px",
};

const inputStyle = {
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #d0d7e2",
  fontSize: "1rem",
  outline: "none",
  background: "#f8fbff",
  color: "#222",
  boxShadow: "0 1px 4px rgba(0,123,255,0.05)",
  transition: "border 0.2s",
};

const submitBtnStyle = {
  padding: "10px 24px",
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

const cancelBtnStyle = {
  padding: "10px 24px",
  background: "#6c757d",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.18s, transform 0.18s",
  outline: "none",
  letterSpacing: "0.01em",
};

export default BookCreate;