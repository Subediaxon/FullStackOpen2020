import React from 'react'

const Contact = ({ persons }) => {

    return (
        <>
            <ul>
                {
                    persons.map((item, index) => (
                        <li key={index}>{item.name}</li>))
                }
            </ul>


        </>

    )

}

export default Contact