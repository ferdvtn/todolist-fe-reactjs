import React, { useState } from "react";

function Input(props) {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        className="border border-slate-500 px-3 text-slate-500"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-200 text-blue-400 border border-blue-400 px-3 ml-1"
        onClick={() => props.onSubmit(todo)}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
