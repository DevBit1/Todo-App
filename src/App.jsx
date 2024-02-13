import { useState } from 'react'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {

  const[todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), todo, completed: false}])
  }

  const deleteTodo = (id) => {
    todos.length > 0 && setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => (
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, todo} : prevTodo
      )
    ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => (
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )
    ))
  }


  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <div className='bg-[#001523] min-h-screen text-[#00377e] flex justify-center'>
        <div className='flex flex-col w-1/2 items-center mt-10'>
          <h1 className='text-3xl font-semibold'>Manage Your Todos</h1>
          <div className='mt-10 mb-12 w-full'>
            <TodoForm/>
          </div>
          <div className='w-full'>
            {
              todos.map((todo) => (
                <TodoList key={todo.id} todo={todo}/>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}