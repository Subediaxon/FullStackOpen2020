import React from 'react'
import { Header, Content, Total } from './Course'

const App = ({ course }) => {


    return (
        <div>
            {course.map((item, index) => (
                <div key={index}>
                    <Header course={item} />
                    <Content course={item} />
                    <Total course={item} />
                </div>
            ))
            }
        </div>
    )

}

export default App;