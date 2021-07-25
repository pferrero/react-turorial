import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
