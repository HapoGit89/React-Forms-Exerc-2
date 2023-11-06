import React from "react"
import './Todo.css'

function Todo({title, text, deleteTodo}) {
   
    return (
        <div className="TodoItem">
           <div className="Todo" >
            <h1>{title}</h1>
            <p><b>Details: </b>{text}</p>
           </div>
           <button className="deleteButton" onClick={deleteTodo}>X</button>
        </div>
    );
  }

  export default Todo
