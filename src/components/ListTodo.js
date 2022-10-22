import React from "react";

function ListTodo(props) {
  console.log(props.todos);
  return (
    <ul className="">
      {props.todos.map((todo, index) => (
        <li
          key={index}
          className={`mt-3 box-content rounded px-3 text-gray-700 hover:cursor-pointer hover:bg-slate-300 ${
            index % 2 === 0 ? "bg-slate-200" : "border"
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
