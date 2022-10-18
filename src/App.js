import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import DoneItems from "./components/DoneItems";
import './App.css';


const App = () => {

//localstorage parsing to turn string into JS object
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const [input, setInput]  = useState(""); //to keep track of inputs
const [todos, setTodos] = useState(initialState); //to keep track of Stored Data
const [editTodo, setEditTodo] = useState(null); //to keep track of Updating of Data

//Turn the JS Object into string
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));

}, [todos]);
  
  return ( 
    <div className="container">
    <div className='app-wrapper'>
        <div>
            <Header />
        </div>
        <div>
            <Form 
              input = {input}
              setInput = {setInput}
              todos = {todos}
              setTodos = {setTodos}
              editTodo = {editTodo}
              setEditTodo = {setEditTodo}
            />
          </div>

          <div>
            <TodosList 
              todos = {todos} 
              setTodos = {setTodos}
              setEditTodo = {setEditTodo}
            />

            <DoneItems 
            todos = {todos}
            setTodos = {setTodos}
            setEditTodo = {setEditTodo}
            />
          </div>
    </div>
  </div>
   );
  }

  export default App;
  