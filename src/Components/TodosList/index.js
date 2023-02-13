import React from "react";

const TodosList = ({todos, setTodos, setEditTodo}) => {

    //function for Complete Task
    const handleComplete = (todo) => {
            setTodos(
                todos.map((item) => {
                    if(item.id === todo.id) {
                        return {...item, completed: !item.completed}
                    }
                    
                return item;
            })
        )
    }

    //function for Editing Task
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }


    //function for Deleting Task
    const handleDelete = ({id, title}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        alert(`${title} is deleted!`)
    }

    
    return ( 
        <div className="todosListContainer">
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input 
                        type="text" 
                        value={todo.title} 
                        className={`list ${todo.completed ? "complete": ""}`} 
                        onChange={(event) => event.preventDefault()} 
                    />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <i class="fa fa-check-square" aria-hidden="true"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
                )
            )}
        </div>


     );
}
 
export default TodosList;