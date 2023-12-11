import { useContext } from "react";
import { taskContext } from './../context/UserContext';

export const useTaskContexts = ()=>{
    return  useContext(taskContext);
}