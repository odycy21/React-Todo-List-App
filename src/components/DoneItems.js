import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";



const DoneItems = ({todos, setTodos, editTodo, setEditTodo}) => {

    //filters todo completed items and move to new variable
    const completedItems = todos.filter(todo => todo.completed)

    console.log(todos)

    return ( 

     <>  
        <div className="done-Items">
                <h1>Done Items</h1>
        </div>


        <div className="done-Items-Container">

            
            {completedItems.map((todo) => (

                    <li className="list-item" key={todo.id}>
                        {todo.title}
                    </li>
                    )
                )} 
          
        </div>
       
    </> 

     );
}
 
export default DoneItems;