import { useState } from "react";
import { BiTaskX } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import {MdEditDocument } from "react-icons/md";
import './Tododesign.css';

const Todoitem = ({inputedData, setInputedData, setInputValue, setIsUpdate, setIndex}) => {

    const [addClass, setAddClass] = useState("");

    const deleteTask = (id)=>{
        const filteredData = inputedData.filter((value, index)=> index !== id);
        setInputedData(filteredData);
    }

    const editTask = (id)=>{
        const findedData = inputedData.find((value, index)=> index === id);
        setInputValue(findedData);
        setIndex(id);
        setIsUpdate(true);
    }

    const markAsCompete = (id)=>{
        const findedData = inputedData.find((value, index)=> index === id);
        // Need more explore.
    }

  return (
    <div>
        {inputedData.length > 0 ?
            <ul className="ulData">
            {
                 inputedData.map((data,index)=>(
                 <li key={index}>
                     <span className="data1" onClick={()=>markAsCompete(index)}><BiTask /></span>
                     <span className="data2">{data}</span>
                     <span className="data3" onClick={()=>editTask(index)}><MdEditDocument /></span>
                     <span className="data4" onClick={()=>deleteTask(index)}><BiTaskX /></span>
                 </li>
                 ))
            }
            </ul>
            :
            <div className="nothingtoShow">
                <p>Nothing has been added yet.</p>
            </div>
        }
    </div>
  )
}

export default Todoitem;