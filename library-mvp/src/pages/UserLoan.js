import React, { useEffect, useState } from "react";

const UserLoan = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [loans, setLoans] = useState([]);

  // Mock user data
  useEffect(() => {
    const mockUsers = [
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
      { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
    ];
    setUsers(mockUsers);
  }, []);

  // Mock loan data when user changes
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

  // Handle return of a book
  const handleReturn = (loanId) => {
    setLoans((prev) =>
      prev.map((loan) =>
        loan.id === loanId ? { ...loan, returned_at: new Date().toISOString().slice(0, 10) } : loan
      )
    );
    alert(`Book returned successfully! (loan_id: ${loanId})`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Loan History</h1>
      <label>Select User: </label>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">-- Select --</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Borrowed Date</th>
            <th>Returned Date / Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => {
            const isOverdue = !loan.returned_at && new Date(loan.borrowed_at) < new Date(new Date() - 14 * 24 * 60 * 60 * 1000);
            return (
              <tr key={loan.id} style={{ color: loan.returned_at ? "green" : isOverdue ? "red" : "black" }}>
                <td>{loan.book_title}</td>
                <td>{loan.borrowed_at}</td>
                <td>{loan.returned_at ? loan.returned_at : "Not Returned"}</td>
                <td>
                  {!loan.returned_at && <button onClick={() => handleReturn(loan.id)}>Return</button>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserLoan;