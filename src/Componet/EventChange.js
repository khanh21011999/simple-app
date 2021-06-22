import React from 'react'

function Clicked() {
    console.log("clicked")
}
class EventChange extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick() {
        this.setState( (previousState)=>{
            return{
                count:previousState.count+1
            }
        }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Increase!</button>
            </div>
        )
    }
}
export default EventChange