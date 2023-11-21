// Task 1: implementing a todo list:

import React from 'react'

const TodoItems = (Props) => {

  return (
    <div>
      {
        Props.todoItem.map(item=>{
          console.log(item.id)
        })
      }
    </div>
  )
}

export default TodoItems;