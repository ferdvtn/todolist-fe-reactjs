import React, { useState } from "react";
import Input from "./Forms/Input";
import ListTodo from "./ListTodo/ListTodo";
import Copyright from "./Others/Copyright";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState({ edit: false, index: null });

  const onSubmit = (value) => {
    if (isEdit.edit) {
      todos[isEdit.index] = {
        isDone: todos[isEdit.index].isDone,
        value: value,
      };
      setIsEdit({ edit: false, index: null });
    } else {
      todos.unshift({
        isDone: false,
        value: value,
      });
    }

    setTodos([...todos]);
  };

  const onDelete = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const onEdit = (index) => {
    setIsEdit({ edit: true, index: index });
    setTodo(todos[index].value);
  };

  const onDoneToggle = (index) => {
    todos[index].isDone = !todos[index].isDone;
    setTodos([...todos]);
  };

  const completedTodo = () => {
    const completed = todos.filter((v) => v.isDone).length;

    return `Completed ${completed} of ${todos.length}`;
  };

  return (
    <div>
      <div className="relative min-h-screen bg-gray-50 p-5">
        <div className="mb-20">
          <div className="mx-auto mb-5 w-full rounded-md bg-gray-100 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-700">Todolist App</h1>
              <p className="text-sm">{completedTodo()}</p>
            </div>
            <ListTodo
              todos={todos}
              onDelete={onDelete}
              onEdit={onEdit}
              onDoneToggle={onDoneToggle}
            />
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
          />
        </div>
      </div>
    </div>
  );
}

export default App;
