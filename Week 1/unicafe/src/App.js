import React, { useState } from 'react'
import './App.css';

//for statistics component

const Statistics = props => {


  if (props.text === "Positive") {
    return (<h4>{props.text}:  {props.stats}%</h4>)
  };
  return (


    <table>
      <tbody>
        <tr>
          <td>{props.text}:</td>
          <td>{props.stats} </td>
        </tr>
      </tbody>
    </table>


  )


};

const Buttons = ({ setGood, setBad, setNeutral }) => {
  return (
    <>
      <button onClick={() => setGood((good) => good + 1)}>Good</button>
      <button onClick={() => setNeutral((neutral) => neutral + 1)}>Neutral</button>
      <button onClick={() => setBad((bad) => bad + 1)}>Bad</button>
    </>
  )
};

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(null)
  const [neutral, setNeutral] = useState(null)
  const [bad, setBad] = useState(null)

  if (!(good || bad || neutral)) {
    return (
      <>
        <h1>Give feedback</h1>
        <Buttons {...{ setGood, setBad, setNeutral }} />
        <h1>Statistics</h1>
        <h4>No feedbacks given</h4>
      </>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Buttons {...{ setGood, setBad, setNeutral }} />
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
