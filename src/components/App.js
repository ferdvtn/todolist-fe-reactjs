import React, { useState } from "react";
import Input from "./Forms/Input";
import ListTodo from "./ListTodo/ListTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (value) => {
    todos.unshift(value);
    setTodos([...todos]);
  };

  const onDelete = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const onEdit = (index) => {
    // console.log("edit index", index);
  };

  return (
    <div>
      <div className="relative min-h-screen bg-gray-50 p-5">
        <div className="mx-auto mb-14 w-full rounded-md bg-gray-100 p-5 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-700">Todolist App</h1>
          <ListTodo todos={todos} onDelete={onDelete} onEdit={onEdit} />
        </div>
      </div>
      <div className="fixed bottom-3 w-full px-5">
        <div className="mx-auto rounded-md bg-gray-100 p-3 shadow-lg">
          <Input onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
