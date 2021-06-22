import React from 'react'
//import MainContent from './Componet/MainContent'
//import Header from './Componet/header'
//import MainContent from './Componet/MainContent'
import ToDo from './Componet/toDo'
import todoData from './Componet/todoData'
//import ContactCard from './Componet/ContactCard'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData,

        }
    }
    handleChange(id) {
        console.log("State Changed", id)
        this.setState(previousState => {
            const updateTodos = previousState.todos.map((todoItem) => {
                if (todoItem.keyId) {
                    todoItem = !todoItem.itemChecked
                }
                return todoItem
            }

            )
            return {
                todos: updateTodos
            }
        })
    }
    render() {
        const todoComponent = this.state.todos.map(todoItem => {

            return (
                <ToDo
                    handleChange={this.handleChange}
                    keyId={todoItem.id}
                    task={todoItem.task}
                    itemChecked={todoItem.completed} />
            )

        })

        return (
            <div className="Todo-main">
                {todoComponent}
            </div>
        )

    }
}
export default App