import React, { useState } from "react";
import Todo from "../models/Todo";

type TodoContext = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContext>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    setTodos((prevState) => prevState.concat(new Todo(todoText)));
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContext = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodosContextProvider;
