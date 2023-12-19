

import { observer } from 'mobx-react'
import React from 'react'
// import todoStore from '../store/todo'

const TodoList = observer(({todoText}) => {

    // const storeObj = todoStore

    // const deleteHanler = () => {
    //     storeObj.remove()
    // };
  return (
    <li style={{color: "wheat", fontSize: "3rem"}}>{todoText}</li>
  )
})

export default TodoList