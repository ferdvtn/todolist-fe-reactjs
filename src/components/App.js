import React, { useState } from "react";
import Input from "./Forms/Input";
import ListTodo from "./ListTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (value) => {
    setTodos([...todos, value]);
  };

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow-xl p-8 m-32">
      <h1 className="text-3xl mb-3 font-bold text-gray-700">Todolist App</h1>
      <Input onSubmit={onSubmit} />
      <div className="mb-5"></div>
      <ListTodo todos={todos} />
    </div>
  );
}

export default App;
