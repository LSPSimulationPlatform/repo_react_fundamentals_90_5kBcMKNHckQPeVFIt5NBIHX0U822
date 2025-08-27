import React from "react";

function BookDetails({ book, onBack }) {
  if (!book) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f4f4f4 0%, #e3f0ff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            borderRadius: "18px",
            boxShadow: "0 4px 24px 0 rgba(31,38,135,0.10)",
            padding: "40px 36px",
            maxWidth: "420px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#185a9d", fontWeight: 700, fontSize: "1.5rem" }}>
            No Book Selected
          </h2>
          <button
            style={backBtnStyle}
            onClick={onBack}
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
            Back to List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f4f4f4 0%, #e3f0ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.92)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px 0 rgba(31,38,135,0.10)",
          padding: "48px 44px",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: "2rem", color: "#185a9d", marginBottom: 18 }}>
          📖 {book.title}
        </h1>
        <div style={{ marginBottom: 28 }}>
          <div style={infoRow}>
            <span style={labelStyle}>Author:</span>
            <span style={valueStyle}>{book.author}</span>
          </div>
          <div style={infoRow}>
            <span style={labelStyle}>Publication Year:</span>
            <span style={valueStyle}>{book.year}</span>
          </div>
          <div style={infoRow}>
            <span style={labelStyle}>Status:</span>
            <span style={{
              ...valueStyle,
              color: book.status === "available" ? "#28a745" : "#dc3545",
              fontWeight: 700,
            }}>
              {book.status === "available" ? "✅ Available" : "❌ Borrowed"}
            </span>
          </div>
          {book.description && (
            <div style={{ ...infoRow, alignItems: "flex-start" }}>
              <span style={labelStyle}>Description:</span>
              <span style={{ ...valueStyle, textAlign: "left", whiteSpace: "pre-line" }}>
                {book.description}
              </span>
            </div>
          )}
        </div>
        <button
          style={backBtnStyle}
          onClick={onBack}
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
          Back to List
        </button>
      </div>
    </div>
  );
}

const infoRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
  gap: "16px",
};

const labelStyle = {
  fontWeight: 600,
  color: "#185a9d",
  fontSize: "1.08rem",
  minWidth: "120px",
  textAlign: "right",
};

const valueStyle = {
  fontWeight: 500,
  color: "#222",
  fontSize: "1.08rem",
  flex: 1,
  textAlign: "left",
};

const backBtnStyle = {
  marginTop: "18px",
  padding: "10px 28px",
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

export default BookDetails;