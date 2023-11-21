import { useState } from 'react';
import './App.css'
import TodoList from './Components/TodoList/TodoItem';

const App = ()=> {

const [todoItem, setTodoItem] = useState([
  {
    id: 1,
    todoData: "HTML",
    completionStatus: true,
  },
  {
    id: 2,
    todoData: "CSS",
    completionStatus: true,
  },
  {
    id: 3,
    todoData: "Javascript",
    completionStatus: true,
  },
  {
    id: 4,
    todoData: "React.js",
    completionStatus: false,
  },
  {
    id: 5,
    todoData: "Bootstrap",
    completionStatus: true,
  },
  {
    id: 6,
    todoData: "MongoDB",
    completionStatus: false,
  },
  {
    id: 7,
    todoData: "Tailwind",
    completionStatus: false,
  } 
]);

  return (
    <div>
    <TodoList todoItem={todoItem}/>
    </div>
  )
}

export default App
