import React from 'react'
//import ReactDOM from 'react-dom'
import todoData from './todoData'
function ToDo(props) {
    return (
        <div className='todo-item'>
            <input type="checkbox" checked={props.itemChecked} />
            <p>{props.task}</p>
            
        </div>
    )
}
export default ToDo