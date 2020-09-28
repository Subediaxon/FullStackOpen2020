import React, { useState } from 'react'
import './App.css';

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }
  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }
  const setToBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setToGood()}>Good</button>
      <button onClick={() => setToNeutral()}>Neutral</button>
      <button onClick={() => setToBad()}>Bad</button>

      <h1>Statistics</h1>
      <p>
        good: {good}<br />
        Neutral: {neutral} <br />
        Bad: {bad}<br />

      </p>
    </div>
  )
}
export default App;
