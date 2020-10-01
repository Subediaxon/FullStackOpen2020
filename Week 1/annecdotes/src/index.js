import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const random_ind = () => Math.floor(Math.random() * props.anecdotes.length);

  //Handles the obejct""votes" - adding and updating key:value pair 
  const handleVotes = () => {
    let copy = { ...votes };

    if (selected in copy) {
      copy[selected] = copy[selected] + 1
    } else {
      copy[selected] = 1
    }
    setVotes(copy)
  }

  // For finding the greatest number of votes
  const onlyValues = Object.values(votes);
  const maxVal = Math.max(...onlyValues);

  //for finding the required quote
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  const reqKey = getKeyByValue(votes, maxVal);


  //For conditional rendering
  if (Object.keys(votes).length === 0 && votes.constructor === Object) {
    return (
      <div>
        <h1>Accectodes APP</h1>
        <span>{props.anecdotes[selected]}</span> <br />
        <h5>No of Votes: {votes[selected]}</h5>
        <button className="btn" onClick={() => setSelected(random_ind)}>Next annectdotes</button>
        <button className="btn" onClick={handleVotes}>Vote this quote</button>
        <h1>Top Pick</h1>
        <span>No top picks</span>
      </div>
    )
  } else {

    return (
      <div>
        <h1>Accectodes APP</h1>
        <span>{props.anecdotes[selected]}</span> <br />
        <h5>No of Votes: {votes[selected]}</h5>
        <button className="btn" onClick={() => setSelected(random_ind)}>Next annectdotes</button>
        <button className="btn" onClick={handleVotes}>Vote this quote</button>
        <h1>Top Pick</h1>
        <span>{anecdotes[reqKey]}</span>
        <h5>Total number of votes: {maxVal}</h5>
      </div>
    )
  }

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);