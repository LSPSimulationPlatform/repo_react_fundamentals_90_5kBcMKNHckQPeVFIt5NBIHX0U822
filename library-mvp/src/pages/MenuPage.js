import React from "react";

const MenuPage = ({ setActivePage }) => {
  const menuItems = [
    { label: "📚 Book List", page: "books" },
    { label: "👤 User List", page: "users" },
    { label: "📖 Loan History", page: "loans" },
    { label: "➕ Create Book", page: "create" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, rgba(58,123,213,0.7), rgba(0,210,255,0.7))",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
          padding: "48px 32px",
          maxWidth: "350px",
          width: "100%",
          textAlign: "center",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: "2.2rem", marginBottom: 8 }}>
          Welcome to Library System
        </h1>
        <p style={{ color: "#222", marginBottom: 32 }}>
          Central navigation page for your Library Information System.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {menuItems.map((item, idx) => (
            <button
              key={item.page}
              onClick={() => setActivePage(item.page)}
              style={{
                padding: "18px",
                background:
                  "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                color: "white",
                border: "none",
                borderRadius: "14px",
                fontSize: "1.15rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(24,90,157,0.08)",
                transition:
                  "transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s",
                outline: "none",
                letterSpacing: "0.02em",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.06) translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(24,90,157,0.18)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(24,90,157,0.08)";
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "44px", color: "#333" }}>
          <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Project Info</h3>
          <p style={{ fontSize: "1rem", opacity: 0.85 }}>
            This app is created by Ali Shukur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;