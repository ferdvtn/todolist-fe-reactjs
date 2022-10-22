import React, { useState } from "react";
import Input from "./Forms/Input";
import ListTodo from "./ListTodo/ListTodo";
import Copyright from "./Others/Copyright";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const onSubmit = (value, index) => {
    if (isEdit) {
      todos[index] = value;
      setIsEdit(false);
      setEditIndex(null);
    } else {
      todos.unshift(value);
    }
    setTodos([...todos]);
  };

  const onDelete = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const onEdit = (index) => {
    setIsEdit(true);
    setEditIndex(index);
    setTodo(todos[index]);
  };

  return (
    <div>
      <div className="relative min-h-screen bg-gray-50 p-5">
        <div className="mb-20">
          <div className="mx-auto mb-5 w-full rounded-md bg-gray-100 p-5 shadow-xl">
            <h1 className="text-2xl font-bold text-gray-700">Todolist App</h1>
            <ListTodo todos={todos} onDelete={onDelete} onEdit={onEdit} />
          </div>
          <Copyright />
        </div>
      </div>
      <div className="fixed bottom-10 w-full px-5">
        <div className="mx-auto rounded-md bg-gray-100 p-3 shadow-xl">
          <Input
            todo={todo}
            setTodo={setTodo}
            onSubmit={onSubmit}
            isEdit={isEdit}
            editIndex={editIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
