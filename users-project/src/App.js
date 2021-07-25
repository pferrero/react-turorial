import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddNewUser={addNewUserHandler} />
      <UsersList users={users} />
    </Wrapper>
  );
}

export default App;
