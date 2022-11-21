import './App.css';
import React, { useState } from 'react';
import kitsGet from './api/kits';

function App() {

  const Search = () => {
    const [showResult, setShowResult] = React.useState(false)
    const [result, setResult] = React.useState("")
    const onClick = () => {
      setShowResult(true)
      setResult(document.getElementById("searchInput").value)
      console.log(result)
      console.log(setResult)
    }
    return (
      <div>
        <div className='col'>
          <input className='searchInput' type="text" id="searchInput"></input>
          <button onClick={onClick}>Search</button>
          {showResult ? <Result id={result} /> : null}
        </div>
      </div>
    )
  }

  function Result(props) {
    var result = kitsGet(props.id)
    if (result == -1) {
      return <div>No result found. Please try again.</div>
    }
    else {
      return <div className='col'>
        <p>Label ID: {result["label_id"]}</p>
        <p>Tracking #: {result["shipping_tracking_code"]}</p>
      </div>
    }
  }

  return (
    <div className='App'>
      <Search />
    </div >
  );
}

export default App;
