import TaskList from './TaskList';
import { useTaskContexts } from '../hook/useContext';

const TaskItem = () => {
  
  const { allTasks, clearAllData } = useTaskContexts();

  const clearAll = ()=>{
    clearAllData();
  }

  return (
    <div style={{textAlign: "center"}}>
      {
        allTasks && allTasks.length > 0 ?
        <div>
          {
            allTasks && allTasks.map(taskItem=> <TaskList key={taskItem.id} taskItem={taskItem} />)
          }
          <div className='clearDataBox'><button onClick={clearAll}>CLEAR ALL TASKS</button></div>
        </div>
        :
        <div className='emptyTaskBox'>
          <p>No task added yet</p>
        </div>
      }
    </div>
  )
}

export default TaskItem;