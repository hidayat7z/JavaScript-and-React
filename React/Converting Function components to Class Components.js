/* Below are the function components, we will convert them to class components
*/





/*
Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug
*/

import React from "react"
import ReactDOM from "react-dom"

// #1
function App() {
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
}

// #2
function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

// #3
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}




/* Below this is the solution */


import React, {Component} from "react"
import ReactDOM from "react-dom"

// #1
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Greeting />
            </div>
        )    
    }
}

// #2
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )    
    }
}

// #3
class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}
