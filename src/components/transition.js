import React from "react"
import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group"

//This variable will be responsible for our animation duration
const timeout = 1000

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStyles = {
    entering: {
        position: 'absolute',
        opacity: 0,

    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 0,
    },
}

class Transition extends React.PureComponent {
    render() {
        //Destructuring props to avoid garbage this.props... in return statement
        const { children, location } = this.props

        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout,
                    }}
                >
                    {
                        //Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
                        status => (
                        <div
                            style={{
                                ...getTransitionStyles[status],
                            }}
                            className={status}
                        >
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )
    }
}

export default Transition
