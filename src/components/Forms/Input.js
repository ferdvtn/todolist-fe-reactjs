import { useState } from "react"

function Input(props) {
  const [todo, setTodo] = useState('')

  return (
      <div>
        <input type="text" className="border border-gray" onChange={(e) => setTodo(e.target.value)} />
        <button type="submit" className="bg-blue-300 text-blue-500 border border-blue-500 px-3 ml-1" onClick={() => props.onSubmit(todo)}>Submit</button>
      </div>
  )  
}

export default Input