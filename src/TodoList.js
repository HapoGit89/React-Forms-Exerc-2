import React, { useState } from "react"
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import './TodoList.css'



function TodoList() {
    const [Todos, setTodos] = useState([])
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
        
    }
    const deleteTodo = (id)=> {
        setTodos(Todos.filter(el=>el.id != id))
    }

    
    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo} />
            <div className="TodoOut">
            {Todos.map((todo)=><Todo title={todo.title} text={todo.text} key={todo.id} deleteTodo={()=>deleteTodo(todo.id)}/>)}
            </div>
        </div>
    );
}

export default TodoList
