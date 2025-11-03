import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);

  return (
    <div>
      <div>
        <h3>Add a User</h3>\
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
