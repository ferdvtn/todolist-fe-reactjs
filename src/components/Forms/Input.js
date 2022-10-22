import React, { useState } from "react";

function Input(props) {
  const [todo, setTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (todo.length > 0) {
      props.onSubmit(todo);
      setTodo("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex">
        <input
          autoFocus={true}
          type="text"
          className="mr-1 flex-grow rounded border border-gray-500 px-3 text-gray-500"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          type="submit"
          className="ml-1 rounded border border-gray-700 bg-gray-300 px-3 text-gray-700"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
