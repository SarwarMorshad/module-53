import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);

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
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
