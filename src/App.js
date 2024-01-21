import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form.js";
import List from "./List.js";
import Item from "./Item.js";

const App = () => {
  const [todos, setTodos] = useState([
    { content: "掃除をする", id: nanoid() },
    { content: "洗濯をする", id: nanoid() },
    { content: "料理をする", id: nanoid() },
  ]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content,
        id: nanoid(),
      },
    ]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
