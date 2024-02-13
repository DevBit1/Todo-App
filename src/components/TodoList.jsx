import { useEffect, useRef, useState } from "react";
import useTodo from "../Context/TodoContext";
import { MdModeEditOutline } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function TodoList({ todo }) {

    const [editable, setEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { toggleComplete, deleteTodo, updateTodo } = useTodo()
    const inputRef = useRef(null)
    const msgLen = useRef(todoMsg)

    useEffect(() => {
        if(editable)
            inputRef.current.focus()
    }, [editable])

    function editTodo() {
        
    }

    return (
        <div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full mb-3"
            >
                <div className={`w-full flex gap-2 ${editable ? "bg-[#fdffb6]" : "bg-[#caffbf]"} p-3 rounded-lg`}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        disabled={editable}
                    />
                    <input
                        type="text"
                        value={todoMsg}
                        readOnly={!editable}
                        onChange={(e) => setTodoMsg(e.target.value)}
                        className={`w-full bg-inherit outline-slate-300 ${todo.completed && "line-through"}`}
                        ref={inputRef}
                    />

                    <button
                        onClick={() => {
                            if(todo.completed)
                                return
                            if(editable){
                                updateTodo(todo.id, todoMsg)
                                setEditable(!editable)
                            }
                            else    
                                setEditable(!editable)
                        }}
                    >
                        {
                            editable ?
                            <FaSave size={"20px"}/> :
                            <MdModeEditOutline size={"20px"}/>
                        }
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>
                        <MdDeleteForever size={"25px"} className="hover:text-red-500"/>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TodoList;