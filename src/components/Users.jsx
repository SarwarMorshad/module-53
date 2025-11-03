import React, { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  console.log(initialUsers);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    console.log(name, email);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After Post", data);
        const updatedUsers = [...users, data];
        setUsers(updatedUsers);
        e.target.reset();
      });
  };

  return (
    <div>
      <div>
        <h3>Add a User</h3>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="name" placeholder="Name" />
          <br />
          <input type="email" name="email" id="email" placeholder="Email" />
          <br />
          <button type="submit">Add User</button>
        </form>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
