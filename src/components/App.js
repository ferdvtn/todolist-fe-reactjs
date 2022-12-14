import React, { useEffect, useState } from "react";
import Input from "./Forms/Input";
import CompletedLabel from "./ListTodo/CompletedLabel";
import ListTodo from "./ListTodo/ListTodo";
import Copyright from "./Others/Copyright";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState({ edit: false, index: null });

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos != null) {
      setTodos(JSON.parse(localTodos));
    } else {
      const date = new Date();
      const createdAt = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
      setTodos([
        {
          isDone: false,
          value: "Create more task",
          createdAt: createdAt,
        },
        {
          isDone: true,
          value: "Read some books",
          createdAt: createdAt,
        },
      ]);
    }
  }, []);

  const onSubmit = (value) => {
    if (isEdit.edit) {
      todos[isEdit.index] = {
        isDone: todos[isEdit.index].isDone,
        value: value,
      };
      setIsEdit({ edit: false, index: null });
    } else {
      const date = new Date();
      todos.unshift({
        isDone: false,
        value: value,
        createdAt: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
      });
    }

    saveTodos();
  };

  const onDelete = (index) => {
    todos.splice(index, 1);
    saveTodos();
  };

  const onEdit = (index) => {
    setIsEdit({ edit: true, index: index });
    setTodo(todos[index].value);
  };

  const onDoneToggle = (index) => {
    todos[index].isDone = !todos[index].isDone;
    saveTodos();
  };

  const saveTodos = () => {
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div>
      <div className="relative min-h-screen bg-gray-50 p-5">
        <div className="mb-20">
          <div className="mx-auto mb-5 w-full rounded-md bg-gray-100 p-5 shadow-xl md:w-2/3">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-700">Todolist App</h1>
              <CompletedLabel todos={todos} />
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
        <div className="mx-auto rounded-md bg-gray-100 p-3 shadow-xl md:w-2/3">
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
