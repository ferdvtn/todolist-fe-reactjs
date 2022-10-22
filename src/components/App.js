import React, { useState } from "react";
import Input from "./Forms/Input";
import ListTodo from "./ListTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (value) => {
    setTodos([value, ...todos]);
  };

  return (
    <div>
      <div className="relative min-h-screen bg-gray-50 p-5">
        <div className="mx-auto mb-16 w-full rounded-md bg-gray-100 p-5 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-700">Todolist App</h1>
          <ListTodo todos={todos} />
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
