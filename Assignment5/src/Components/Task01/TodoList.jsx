import { useState } from "react";
import Todoitem from "./Todoitem";
import './Tododesign.css';

const TodoList = () => {
    const [InputValue, setInputValue] = useState("");
    const [inputedData, setInputedData] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [index, setIndex] = useState(0);

    const allData = [inputedData, setInputedData, setInputValue, setIsUpdate, setIndex]

    const handleInputedData = ()=>{
        setInputedData([...inputedData, InputValue]);
    }

    const handeForm =(e)=>{
        e.preventDefault();
        if(InputValue){
            handleInputedData();
            setInputValue("");
        } else {
            alert("Please input somthing!")
        }
    }

    const updateTodo = (e)=>{
        e.preventDefault();
        if(InputValue !== ""){
            inputedData[index] = InputValue;
            setIsUpdate(false);
            setInputValue("");
        } else {
            alert("Please edit or input somthing!");
        }
    }

  return (
    <div>
        <form action="" onSubmit={isUpdate ? updateTodo : handeForm}>
            <h2>Add your task</h2>
            <div>
                <input onChange={(e)=>setInputValue(e.target.value)} value={InputValue} type="text" placeholder='Input your task...'/>
                <button>{isUpdate? <>Update </> : <>Add</>}</button>
            </div>
        </form>
        <Todoitem inputedData={inputedData} setInputedData={setInputedData} setInputValue={setInputValue} setIsUpdate={setIsUpdate} setIndex={setIndex}/>
    </div>
  )
}

export default TodoList;