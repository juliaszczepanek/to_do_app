import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './styles.css'
import { useEffect, useState } from "react"

export default function App(){
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return[]

    return JSON.parse(localValue)
  });


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTask(title){
    setTodos(currentTodos => {
      return[
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed: 
        false},
    ]
  })
  }

function toggleTodo(id, completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        return {...todo, completed}
      }

      return todo;
    })
  })
}

function deleteTask(id){
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })

}

  return(
    <>
    <NewTodoForm onSubmit={addTask}/>
  <h1 className="form__header">Tasks to do</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTask={deleteTask}/>
  </>
  )
}