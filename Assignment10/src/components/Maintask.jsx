import { useEffect, useReducer } from 'react'
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';
import { taskContext } from './../context/UserContext';
import { taskReducer } from '../Redueses/Reduces';
import { initialState } from '../Redueses/initialState';
import Title from './Title';

const Maintask = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState);

    const taskDispatches = {
        allTasks: state.allTasks,
        addTask: (task)=>{
            dispatch({type: "ADD_TASK", payload: task});
        },
        deleteTask: (id)=>{
            dispatch({type: "DELETE_TASK", payload: id})
        },
        clearAllData: ()=>{
            dispatch({type: "CLEAR_ALL_DATA", payload: []})
        }
    }
    
    useEffect(()=>{
        localStorage.setItem("allTasks", JSON.stringify(state.allTasks))
    },[state.allTasks]);

  return (
    <taskContext.Provider value={ taskDispatches }>
        <div>
            <div className='titleAndForm'>
                <Title />
                <AddTaskForm />
            </div>
            <TaskItem />
        </div>
    </taskContext.Provider>
  )
}

export default Maintask;