import React from "react";

function ListTodo(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li
          key={index}
          className={`mt-3 px-3 text-sm text-slate-500 ${
            index % 2 === 0 ? "bg-slate-300" : "bg-slate-200"
          }
          `}
        >
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
