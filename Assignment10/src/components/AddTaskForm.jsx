import React, { useState } from 'react'
import { useTaskContexts } from './../hook/useContext';

const AddTaskForm = () => {

  const [inputValue, setInputValue] = useState("");

  const { addTask } = useTaskContexts();

  const handleFrom = (e)=>{
    e.preventDefault();

    if(inputValue.trim() === ""){
      return;
    } else {
      const taskitem = {
        id: Date.now(),
        task: inputValue
      }
      addTask(taskitem);
      setInputValue("");
    }
  }
  return (
    <div>
      <form className='formBox' onSubmit={handleFrom}>
        <input type='text' name='taskInput' onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder='Input your task'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddTaskForm;