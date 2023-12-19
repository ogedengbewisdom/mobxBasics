
import { observer } from 'mobx-react'
import React from 'react'
import todoStore from '../store/todo'
import TodoList from './TodoList';

const TodoItem = observer(() => {

    const todoObj = todoStore;
    const items = todoObj.todo
  return (
    <ul>
        {items.map(item => <TodoList key={item.id} todoText={item.text} />)}
       
    </ul>
  )
})

export default TodoItem