import { dividerClasses } from "@mui/material";
import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";


const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    //localstorage parsing to turn string into JS object
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];


     //Update function
     const updateTodo = (title, id, completed) => {

        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
            
        setTodos(newTodo);
        setEditTodo("");
    
    }

    //For realtime update and for info to appear on the input
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title)
        }else{
            setInput("");
        }
    }, [setInput, editTodo]);



    const onInputChange = (event) => {

            setInput(event.target.value);
    };


    //Function for Adding Input
    // Submit button for adding input
    const onFormSubmit = (event) => {
        event.preventDefault();

        //if(!input === '' || input === null){ empty value
        if(!input){
            alert(`Please Input some values!`);

            return false;
            
        }
        
        else if(input.length <= 5){
            alert(`Please Input some values greater than 5 characters!`);

            return false;

        }

        //Handles if an item will be edited or not
       else if(!editTodo){
            //using spread syntax
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
            
             //alert for Adding items
             alert(`${input} is Added!`)
         
        } else{
            updateTodo(input, editTodo.id, editTodo.completed);
              //alert for Updating items
             alert(`${input} is updated!`)
  
        }
    };


    return ( 
        <div className="inputContainer">
            <form onSubmit={onFormSubmit}>
                <input type="text" 
                    placeholder="Enter a Todo. .." 
                    className="task-input"
                    value={input}
                    onChange = {onInputChange}
                />


                <button className="button-add" type="submit">
                    {editTodo ? "Save?" : "Add"}
                </button>

            </form>
       </div>
     );
}
 
export default Form;
