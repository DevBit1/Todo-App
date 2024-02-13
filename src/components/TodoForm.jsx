import { useState } from "react";
import useTodo from "../Context/TodoContext";

function TodoForm() {

    const [todo, setTodo] = useState("")
    const{addTodo} = useTodo()


    return ( 
        <form
            onSubmit={(e) => {
                e.preventDefault()
                todo !== "" && addTodo(todo)
                setTodo("")
            }}
            className="w-full"
        >
            <label className="flex">
                <input
                    type="text"
                    placeholder="Add your task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="w-full h-10 rounded-l-lg px-5"
                />
                <button
                    className="bg-[#0096c7] px-5 rounded-r-lg ml-1 h-10 text-[#ffe8d6] hover:bg-[#0077b6]"
                >
                    Apply
                </button>
            </label>
        </form>
     );
}

export default TodoForm;