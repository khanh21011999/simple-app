import React from 'react'

function TimeFunc() {
    const date = new Date()
    const hour = date.getHours()
    let timeOfDay
    if (hour < 12) {
        timeOfDay="morning"

    }
    else if(hour>=12&&hour<18){
        timeOfDay="afternoon"
    } else{
        timeOfDay="night"
    }
    return (
        <h1 className="greeting"> Good {timeOfDay} </h1>
    )

}

export default TimeFunc