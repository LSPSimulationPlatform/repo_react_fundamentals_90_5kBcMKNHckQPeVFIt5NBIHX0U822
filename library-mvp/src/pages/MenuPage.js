import React from "react";

const MenuPage = ({ setActivePage }) => {
  const menuItems = [
    { label: "📚 Book List", page: "books" },
    { label: "👤 User List", page: "users" },
    { label: "📖 Loan History", page: "loans" },
    { label: "➕ Create Book", page: "create" },
  ];

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to Library System</h1>
      <p>Central navigation page for your Library Information System.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {menuItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setActivePage(item.page)}
            style={{
              padding: "20px",
              background: "#4CAF50",
              color: "white",
              textDecoration: "none",
              borderRadius: "10px",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "50px" }}>
        <h3>Project Info</h3>
        <p>This is a local React app for educational purposes demonstrating full-stack concepts.</p>
      </div>
    </div>
  );
};

export default MenuPage;