import React from 'react'
import ListToDo from './Component/ListToDo'
import { useState, useRef} from 'react'
import {v4 as uuidv4} from 'uuid'


export default function App() {
  const [todos, setTodos] = useState([]);
  const todoName = useRef();

  const toggleTodo = (id) =>{
      const newTodos = [...todos];
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete;
      setTodos(newTodos); 
  }

  const handleAddToDo = (e)=>{
      const name = todoName.current.value;
      if (name.length <=0 ) return
      setTodos(prevTodos =>{
        return [...prevTodos, {id:uuidv4(), name: name, complete: false}]
      })

      todoName.current.value = null;

  }

  const handleRemove = ()=>{
      const newTodos = [...todos];
      const listNotComplete = newTodos.filter(todo => todo.complete === false)
      setTodos(listNotComplete)
  }


  return (
    <div>
      <ListToDo  todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoName} type="text"></input>
      <button onClick={handleAddToDo}>Add To Do</button>
      <button onClick={handleRemove} >Clear Completed</button>
      <div>{todos.filter(todo => todo.complete === false).length} left to do</div>
    </div>
  ) 
}
