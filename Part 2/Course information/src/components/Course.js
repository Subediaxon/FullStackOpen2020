import React from 'react'
import './course.css'


export const Title = () => {

    return (
        <div>
            <h1>Web Development Curriculum</h1>
        </div>
    )
}

export const Header = (props) => {

    return (
        <div>
            <h2> {props.course.name}</h2>
        </div>
    )
}


export const Content = (props) => {

    return (
        <>
            <ul>
                {props.course.parts.map(item => <li key={item.id}>{item.name} {item.exercises}</li>)}
            </ul>

        </>
    )
}

export const Total = (props) => {

    const total = props.course.parts.reduce((sum, val) => sum + val.exercises, 0);

    return (
        <>
            <h4>Number of exercises: {total}</h4>
        </>
    )
}

