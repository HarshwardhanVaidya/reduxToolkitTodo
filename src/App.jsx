import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'
function App() {
//  console.log('hello');
  return (
    <>
      <h1>Add Your Todo</h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
