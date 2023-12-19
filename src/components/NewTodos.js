
import todoStore from "../store/todo"
import classes from "./NewTods.module.css"
import React, { useRef } from 'react'

const NewTodos = () => {

    const inputRef = useRef()
    const storeObj = todoStore

    const addTodoHandler = (e) => {
        e.preventDefault()
        const text = inputRef.current.value
        const data = {
            id: Math.random(),
            text: text
        }
        storeObj.addTodo(data)
    }
  return (
    <main className={classes.auth}>
    <section>
      <form onSubmit={addTodoHandler}>

        <div className={classes.control}>
          <label htmlFor='todos'>Todo</label>
          <input type='text' id='todos' ref={inputRef} />
        </div>
        <button>Add</button>
      </form>
    </section>
  </main>
  )
}

export default NewTodos