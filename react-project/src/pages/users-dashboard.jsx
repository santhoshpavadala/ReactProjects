import { useEffect, useState } from "react";
import { getUsers } from "../services/user-service";

function UsersDashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);

      const response = await getUsers();

      setUsers(response.data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Users...</h2>;
  }

  return (
    <>
      <h1 className="page-title">
        Users Dashboard
      </h1>

      <div className="card-grid">

        {users.map((user) => (
          <div key={user.id} className="dashboard-card">
            <h4>Name: {user.name}</h4>

            <p>Email: {user.email}</p>

            <p>Phone: {user.phone}</p>

            <p>Website: {user.website}</p>
          </div>
        ))}

      </div>
    </>
  );
}

export default UsersDashboard;