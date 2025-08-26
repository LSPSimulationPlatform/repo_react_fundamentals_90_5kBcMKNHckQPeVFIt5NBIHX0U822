import React, { useEffect, useState } from "react";

function UserList() {
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
    <div style={{ padding: "20px" }}>
      <h1>👤 User List</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={thStyle}>Avatar</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Total Books Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              style={{ background: index % 2 === 0 ? "#ffffff" : "#f9f9f9" }} // alternating row colors
            >
              <td style={tdStyle}>
                <img
                  src={`https://i.pravatar.cc/40?u=${user.id}`} // placeholder avatar
                  alt="avatar"
                  style={{ borderRadius: "50%" }}
                />
              </td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.totalBorrowed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = { border: "1px solid #ddd", padding: "10px", textAlign: "left" };
const tdStyle = { border: "1px solid #ddd", padding: "10px" };

export default UserList;
