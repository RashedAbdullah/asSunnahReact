import { useState } from 'react';
import { useTaskContexts } from '../hook/useContext';
import { LiaEdit } from "react-icons/lia";
import { MdDataSaverOn } from "react-icons/md";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";


const TaskList = ({ taskItem }) => {
  const {id, task} = taskItem;

  const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState("");

  const { allTasks, deleteTask } = useTaskContexts();

  const deleteBtn = (id)=>{
    deleteTask(id);
  }

  const editTask = (id)=>{
    const findedValue = allTasks.find(forEdit=> forEdit.id === id);
    setIsEdit(true)
    setUpdate(findedValue.task);
  }
  
  const submitEdit = (id)=>{
    if(update.trim() === ""){
      return;
    } else {
      setIsEdit(false);
      const findedValue = allTasks.find(forEdit=> forEdit.id === id);
      findedValue.task = update;
    }
  }

  return (
    <div className='inputAndEditDelete'>

        <div className='inputBoxAndMark'>
            <p>
              <input type="checkbox" onChange={(e)=>setIsChecked(e.target.checked)} value={isChecked}/>
              {
                isEdit?
                <input className='editInput' type="text" onChange={(e)=>setUpdate(e.target.value)} value={update}/>
                :
                <span style={{textDecoration: isChecked ? "line-through" : "", color: isChecked? "green": ""}}>{task}</span>
              }
            </p>
        </div>

        <div className='buttonBox'>
          <button onClick={()=>isEdit? submitEdit(id) : editTask(id)}>{isEdit? <MdDataSaverOn /> : <LiaEdit />}</button>
          <button onClick={()=>deleteBtn(id)}><MdOutlineRemoveCircleOutline /></button>
        </div>

    </div>
  )
}

export default TaskList;