

import { observer } from 'mobx-react'
import React from 'react'
import todoStore from '../store/todo'

const TodoList = observer(({todoText, id}) => {

    const storeObj = todoStore

    const deleteHanler = () => {
      console.log("Deleting item with ID:", id);
        storeObj.remove(id)
    };
  return (
    <li style={{color: "wheat", fontSize: "3rem"}}>{todoText} <button onClick={deleteHanler}>DELETE</button></li>
  )
})

export default TodoList