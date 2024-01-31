import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  // console.log("hi from Todos.jsx");
  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li 
            className="mt-4 flex justify-between items-center bg-gray-200 px-4 py-2 rounded"
            key ={todo.id}>
            <div>{todo.text}</div>
            <button 
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" >
                Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
