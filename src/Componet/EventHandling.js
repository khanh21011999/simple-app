import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

function hanndleClick() {
    console.log("just click")
}
class EventHandling extends React.Component {
    render() {

        return (
            <div>
                <img
                    onMouseOver={
                        () => console.log("hovered")
                    }
                    alt="dasds"
                    src="https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180902291/109316483-click-me-vector-icon-isolated-on-transparent-background-click-me-logo-concept.jpg"></img>
                <br />
                <br />
                <button onClick={
                    hanndleClick()
                }>click me</button>
            </div>

        )
    }

}

export default EventHandling