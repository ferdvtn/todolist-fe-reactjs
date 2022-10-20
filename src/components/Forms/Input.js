import React, { useState } from "react";

function Input(props) {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        className="border border-gray-500 px-3 text-gray-500 rounded"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gray-300 text-gray-700 border border-gray-700 px-3 ml-1 rounded"
        onClick={() => props.onSubmit(todo)}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
