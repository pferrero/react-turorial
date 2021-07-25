import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Username and age must be non empty.",
      });
      return;
    }
    if (+age < 1) {
      // + ensures the convertion to int
      setError({
        title: "Invalid input",
        message: "Age must be greater than 0.",
      });
      return;
    }
    console.log(username, age);
    const newUser = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };
    props.onAddNewUser(newUser);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const dismissModalHandler = () => {
    setError();
  };

  return (
    <Card className={styles.input}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={dismissModalHandler}
        />
      )}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={username}
        />
        <label htmlFor="age">Age (years):</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
