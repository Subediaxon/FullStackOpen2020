import React, { useState } from 'react'
import { render } from 'react-dom';
import './App.css';

const Statistics = props => {
  if (props.text === "Positive") {
    return (<h4>{props.text}:  {props.stats}%</h4>)
  };
  return (
    <h4>{props.text}:  {props.stats}</h4>)
};

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
      <Statistics text="Good" stats={good} />
      <Statistics text="Neutral" stats={neutral} />
      <Statistics text="Bad" stats={bad} />
      <Statistics text="All" stats={good + neutral + bad} />
      <Statistics text="Average" stats={(good - bad) / (good + neutral + bad)} />
      <Statistics text="Positive" stats={(good / (good + bad + neutral))} />

    </div>
  )
}
export default App;
