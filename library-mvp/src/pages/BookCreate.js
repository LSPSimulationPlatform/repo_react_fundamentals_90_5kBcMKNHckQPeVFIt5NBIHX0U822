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
    // Simulate /book/create API response
    const newBook = {
      id: Math.max(...books.map((b) => b.id), 0) + 1, // Generate unique ID using books prop
      title: formData.title,
      author: formData.author,
      year: parseInt(formData.year),
      description: formData.description,
      status: "available",
    };
    // Update books state
    setBooks((prev) => [...prev, newBook]);
    // Show confirmation
    alert(`🎉 Book "${formData.title}" created successfully!`);
    // Redirect to Book List
    setActivePage("books");
    // Reset form
    setFormData({ title: "", author: "", year: "", description: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📖 Create New Book</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
        </div>
        <div>
          <label>Publication Year: </label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", fontSize: "16px", minHeight: "100px" }}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Create Book
          </button>
          <button
            type="button"
            onClick={() => setActivePage("books")}
            style={{
              padding: "10px 20px",
              background: "#6c757d",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookCreate;