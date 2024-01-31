import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  // console.log("hi from AddTodo.jsx");
  const [input, setInput] = useState('');
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler}  className="space-x-3 mt-12">
      <input 
        type="text" 
        className="bg-gray-100 rounded border border-gray-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder='enter a todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button 
        type='submit'
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >Add Todo</button>
    </form>
  )
}

export default AddTodo
