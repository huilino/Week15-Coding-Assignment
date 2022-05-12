import React from 'react'
import { FaTrash } from "react-icons/fa"
import { FaEdit } from  "react-icons/fa"

function Todo({todo, onDelete, onEdit}) {
    return(
        <div className = "todo-row">
            <div className="col-sm-10 mytodos">
                {todo.text}
            </div>
            <div className ="col icons">
                <FaEdit
                    className="edit-icon"
                    onClick={() => onEdit(todo)}
                />
                <FaTrash
                    className="delete-icon" 
                    onClick={() => onDelete(todo)}
                /> 
            </div>
        </div>      
    )
}

export default function TodoList({todos, onDelete, onEdit}) {
    const todo = todos.map(todo => <Todo key = {todo._id} todo={todo} onDelete={onDelete} onEdit = {onEdit} />);
    const emptyTodo = <p>No todos!</p>
  return (
    <div className = "todo-list">
        {(todo)? todo : emptyTodo}
    </div>
  )
}
