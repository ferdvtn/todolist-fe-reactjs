import React, { useState } from "react";
import Input from "./Forms/Input";
import ListTodo from "./ListTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (value) => {
    setTodos([...todos, value]);
  };

  return (
    <div className="m-5 p-5 shadow">
      <h1 className="text-3xl mb-3 font-bold underline">Todolist App</h1>
      <div className="mb-1">
        <Input onSubmit={onSubmit} />
      </div>
      <ListTodo todos={todos} />
    </div>
  );
}

export default App;
