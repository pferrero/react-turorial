import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef);
    console.log(ageInputRef);
    if (
      nameInputRef.current.value.length === 0 ||
      ageInputRef.current.value.length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Username and age must be non empty.",
      });
      return;
    }
    if (+ageInputRef.current.value < 1) {
      // + ensures the convertion to int
      setError({
        title: "Invalid input",
        message: "Age must be greater than 0.",
      });
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      username: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };
    props.onAddNewUser(newUser);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
        <input id="username" type="text" ref={nameInputRef} />
        <label htmlFor="age">Age (years):</label>
        <input id="age" type="number" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
