import React, { useEffect, useState } from "react";

function UserList({ setActivePage }) {
  const [users, setUsers] = useState([]);

  // Load mock data (instead of /users/list API)
  useEffect(() => {
    const mockUsers = [
      { id: 1, name: "Alice Johnson", email: "alice@example.com", totalBorrowed: 3 },
      { id: 2, name: "Bob Smith", email: "bob@example.com", totalBorrowed: 1 },
      { id: 3, name: "Charlie Davis", email: "charlie@example.com", totalBorrowed: 5 },
      { id: 4, name: "Diana Prince", email: "diana@example.com", totalBorrowed: 0 },
    ];
    setUsers(mockUsers);
  }, []);

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
          background: "rgba(255,255,255,0.88)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px 0 rgba(31,38,135,0.10)",
          padding: "36px 32px",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: "2rem", color: "#185a9d", marginBottom: 18 }}>
          👤 User List
        </h1>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr style={{ background: "#e3f0ff" }}>
                <th style={thStyle}>Avatar</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Total Borrowed</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  style={{
                    background: "#fff",
                    transition: "background 0.18s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f0f7ff")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                >
                  <td style={tdStyle}>
                    <img
                      src={`https://i.pravatar.cc/40?u=${user.id}`}
                      alt="avatar"
                      style={{
                        borderRadius: "50%",
                        border: "2px solid #007bff",
                        boxShadow: "0 2px 8px rgba(0,123,255,0.08)",
                        width: 40,
                        height: 40,
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td style={{ ...tdStyle, fontWeight: 600, color: "#222" }}>{user.name}</td>
                  <td style={{ ...tdStyle, color: "#185a9d" }}>{user.email}</td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        background: "#e3f0ff",
                        color: "#007bff",
                        borderRadius: "6px",
                        padding: "4px 12px",
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      {user.totalBorrowed}
                    </span>
                  </td>
                </tr>
              ))}
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
  verticalAlign: "middle",
};

export default UserList;
