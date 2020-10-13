import React, { useState } from 'react'
import Contact from './component/Names'
import './App.css';



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault();

    // CHecking for empty input
    if (newName === "") {
      alert("The Name field is empty")
    }

    else {

      // checking for same name
      let fill = persons.filter(item => item.name === newName)
      if (fill.length > 0) {
        alert(`${newName} already exists`)
        setNewName("")
      }
      else {
        const newContactObj = {
          name: newName
        }

        setPersons(persons.concat(newContactObj))
        setNewName("")
      }

    }

  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName}
            onChange={handleChange}
          />
        </div>
        <div >
          <button id="submit-btn" type="submit">Add contact</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contact persons={persons} />

    </div>
  )
}

export default App
