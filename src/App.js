import React, {useState, useEffect} from "react";
import Header from "./Components/Header/";
import Form from "./Components/Forms/";
import TodosList from "./Components/TodosList/";
import Footer from "./Components/Footer";
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
       <Header />
          <div>
              <TodosList 
                todos = {todos} 
                setTodos = {setTodos}
                setEditTodo = {setEditTodo}
              />
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
              <Footer />
            </div>
     
      </div>
  </div>
   );
  }

  export default App;
  