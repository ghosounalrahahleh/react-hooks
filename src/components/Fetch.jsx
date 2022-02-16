import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonResponse = await response.json();
      setUsers(jsonResponse);
    };
    getUsers();

  }, []);
  return (
    <React.Fragment>
      <div className="column">
        <table className="ui celled selectable aligned table">
          <thead>
            <tr>
              <th>#</th>
              <th>user name</th>
              <th>name</th>
              <th>email</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Fetch;
