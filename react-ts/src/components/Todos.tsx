import { useContext } from "react";
import { TodoContext } from "../store/todo-context";

import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
