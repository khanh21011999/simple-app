import React from 'react'
//import ReactDOM from 'react-dom'
//import todoData from './todoData'
function HandleClick() {
    console.log("you just check")

}
function ToDo(props) {
    return (
        <div className='todo-item'>
            <input
                type="checkbox"
                checked={props.itemChecked}
                onChange={() => props.handleChange(props.keyId)} />
            <p>{props.task}</p>

        </div>
    )
}
export default ToDo