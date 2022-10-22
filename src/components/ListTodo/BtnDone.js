function BtnDone(props) {
  return (
    <div
      onClick={() => props.onDoneToggle(props.index)}
      className={`group/li-div invisible flex items-center rounded px-2 hover:cursor-pointer group-hover/li:visible ${
        props.isDone ? "hover:bg-red-100" : "hover:bg-green-100"
      }`}
    >
      {props.isDone ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4 group-hover/li-div:text-red-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4 group-hover/li-div:text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      )}
    </div>
  );
}

export default BtnDone;
