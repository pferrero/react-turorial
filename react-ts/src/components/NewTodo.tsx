import { useRef, useContext } from "react";
import { TodoContext } from "../store/todo-context";

import classes from "./NewTodo.module.css";

export const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
