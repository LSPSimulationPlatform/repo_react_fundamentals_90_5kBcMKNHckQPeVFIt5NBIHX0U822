import React, { useEffect, useState } from "react";

const UserLoan = ({ setActivePage }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const mockUsers = [
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
      { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
    ];
    setUsers(mockUsers);
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const mockLoans = [
        { id: 1, userId: 1, book_title: "1984", borrowed_at: "2025-08-01", returned_at: null },
        { id: 2, userId: 1, book_title: "The Great Gatsby", borrowed_at: "2025-08-10", returned_at: "2025-08-15" },
        { id: 3, userId: 2, book_title: "To Kill a Mockingbird", borrowed_at: "2025-08-05", returned_at: null },
      ];
      setLoans(mockLoans.filter((loan) => loan.userId === parseInt(selectedUser)));
    } else {
      setLoans([]);
    }
  }, [selectedUser]);

  const handleReturn = (loanId) => {
    setLoans((prev) =>
      prev.map((loan) =>
        loan.id === loanId ? { ...loan, returned_at: new Date().toISOString().slice(0, 10) } : loan
      )
    );
    alert(`Book returned successfully! (loan_id: ${loanId})`);
  };

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
          background: "rgba(255,255,255,0.92)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px 0 rgba(31,38,135,0.10)",
          padding: "40px 36px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: "2rem", color: "#185a9d", marginBottom: 24 }}>
          📖 User Loan History
        </h1>
        <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
          <label style={{ fontWeight: 600, color: "#185a9d", fontSize: "1.08rem" }}>
            Select User:
          </label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #d0d7e2",
              fontSize: "1rem",
              outline: "none",
              background: "#f8fbff",
              color: "#222",
              boxShadow: "0 1px 4px rgba(0,123,255,0.05)",
              transition: "border 0.2s",
              minWidth: 180,
            }}
          >
            <option value="">-- Select --</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr style={{ background: "#e3f0ff" }}>
                <th style={thStyle}>Book Title</th>
                <th style={thStyle}>Borrowed Date</th>
                <th style={thStyle}>Returned Date / Status</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {loans.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center", padding: "18px", color: "#888" }}>
                    {selectedUser ? "No loans found for this user." : "Please select a user."}
                  </td>
                </tr>
              ) : (
                loans.map((loan) => {
                  const isOverdue =
                    !loan.returned_at &&
                    new Date(loan.borrowed_at) < new Date(new Date() - 14 * 24 * 60 * 60 * 1000);
                  return (
                    <tr
                      key={loan.id}
                      style={{
                        background: "#fff",
                        transition: "background 0.18s",
                        color: loan.returned_at
                          ? "#28a745"
                          : isOverdue
                          ? "#dc3545"
                          : "#222",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#f0f7ff")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                    >
                      <td style={tdStyle}>{loan.book_title}</td>
                      <td style={tdStyle}>{loan.borrowed_at}</td>
                      <td style={tdStyle}>
                        {loan.returned_at ? (
                          <span style={{ color: "#28a745", fontWeight: 600 }}>
                            {loan.returned_at} (Returned)
                          </span>
                        ) : isOverdue ? (
                          <span style={{ color: "#dc3545", fontWeight: 600 }}>
                            Overdue
                          </span>
                        ) : (
                          <span style={{ color: "#ff9800", fontWeight: 600 }}>
                            Not Returned
                          </span>
                        )}
                      </td>
                      <td style={tdStyle}>
                        {!loan.returned_at && (
                          <button
                            style={btnStyle}
                            onClick={() => handleReturn(loan.id)}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = "#0056b3";
                              e.currentTarget.style.transform = "scale(1.05)";
                              e.currentTarget.style.boxShadow =
                                "0 6px 18px rgba(0,123,255,0.18)";
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = "#007bff";
                              e.currentTarget.style.transform = "scale(1)";
                              e.currentTarget.style.boxShadow =
                                "0 2px 8px rgba(0,123,255,0.08)";
                            }}
                          >
                            Return
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
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
};

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

export default UserLoan;