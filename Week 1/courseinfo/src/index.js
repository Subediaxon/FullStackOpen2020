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
    const parts = props;
    console.log(parts)
    return (
        <>
            <p>{props.parts[0].name} {props.parts[0].exercises}</p>
            <p>{props.parts[1].name} {props.parts[1].exercises}</p>
            <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </>
    )
}
const Total = (props) => {
    const parts = props;
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    return (
        <>
            <p>Number of exercises: {total}</p>
        </>
    )
}

const App = () => {

    const course = 'Half Stack application development'

    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 12
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>

    )
}


ReactDOM.render(<App />, document.getElementById("root"))
