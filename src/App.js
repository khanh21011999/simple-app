import React from 'react'
//import MainContent from './Componet/MainContent'
//import Header from './Componet/header'
//import MainContent from './Componet/MainContent'
import ToDo from './Componet/toDo'
import todoData from './Componet/todoData'
//import ContactCard from './Componet/ContactCard'
function App() {
    const todoComponent = todoData.map(todoItem => {

        return (
            <ToDo key={todoItem.id} task={todoItem.task} itemChecked={todoItem.completed} />
        )

    })
    return (
        <div className="Todo-main">
            {todoComponent}
        </div>
    )

}

export default App