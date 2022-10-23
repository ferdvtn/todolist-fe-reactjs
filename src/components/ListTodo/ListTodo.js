import React from "react";
import BtnDelete from "./BtnDelete";
import BtnEdit from "./BtnEdit";
import BtnDone from "./BtnDone";
import CreatedAtLabel from "./CreatedAtLabel";

function ListTodo(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li
          key={index}
          className={`group/li mt-3 flex justify-between rounded-md border py-1 px-2 text-slate-600 hover:bg-slate-300
            ${index % 2 === 0 ? "bg-slate-200" : "border"}
            ${todo.isDone ? "border-gray-500 line-through" : ""}
          `}
        >
          <div className="flex-grow">{todo.value}</div>
          <div className="flex items-center space-x-1">
            <CreatedAtLabel createdAt={todo.createdAt} />
            <BtnDone
              index={index}
              onDoneToggle={props.onDoneToggle}
              isDone={todo.isDone}
            />
            <BtnEdit index={index} onEdit={props.onEdit} />
            <BtnDelete index={index} onDelete={props.onDelete} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
