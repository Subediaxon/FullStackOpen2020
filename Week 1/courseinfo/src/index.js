import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

    return (
        <div>
            <h1>Course Name: {props.course}</h1>
        </div>
    )
}
const Content = (props) => {

    return (
        <>
            <p>{props.part1} {props.exercises1}</p>
            <p>{props.part2} {props.exercises2}</p>
            <p>{props.part3} {props.exercises3}</p>
        </>
    )
}
const Total = (props) => {
    const total = props.exercises1 + props.exercises2 + props.exercises3
    return (
        <>
            <p>Number of exercises: {total}</p>
        </>
    )
}

const App = () => {

    const course = 'Half Stack application development'

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 12
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content part1={part1.name} exercises1={part1.exercises} />
            <Content part2={part2.name} exercises2={part2.exercises} />
            <Content part3={part3.name} exercises3={part3.exercises} />
            <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
        </div>

    )
}


ReactDOM.render(<App />, document.getElementById("root"))
