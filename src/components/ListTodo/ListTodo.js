import React from "react";
import BtnDelete from "./BtnDelete";
import BtnEdit from "./BtnEdit";

function ListTodo(props) {
  return (
    <ul className="">
      {props.todos.map((todo, index) => (
        <li
          key={index}
          className={`group/li mt-3 box-content flex justify-between rounded-md py-1 px-2 text-slate-600 hover:cursor-pointer hover:bg-slate-300 ${
            index % 2 === 0 ? "bg-slate-200" : "border"
          }
          `}
        >
          <div className="flex-grow">{todo}</div>
          <BtnEdit index={index} onEdit={props.onEdit} />
          <BtnDelete index={index} onDelete={props.onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
