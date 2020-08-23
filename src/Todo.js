import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
        <div className="todo-list">
            <li>{props.text} <br /> <span style={{fontSize:'10px', color:'gray'}}>hello 'Morning'</span> </li>
        </div>
    )
}

export default Todo
