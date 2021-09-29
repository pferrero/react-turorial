import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '' && enteredNameTouched;
  const enteredEmailIsValid = /\S+@\S+\.\S+/.test(enteredEmail.trim()) && enteredEmailTouched;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      setEnteredNameTouched(true);
      setEnteredEmailTouched(true);
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);

    console.log(enteredName);
    console.log(enteredEmail);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Email input must be an email.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
