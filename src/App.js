import './App.css';
import React, { useState } from 'react';
import kitsGet from './api/kits';

function App() {

  // search component
  const Search = () => {
    const [showResult, setShowResult] = React.useState(false)
    const [result, setResult] = React.useState("")
    // onClick handler for search button, sets and shows the result
    const onClick = () => {
      setShowResult(true)
      setResult(document.getElementById("searchInput").value)
    }
    // shows the result if there is one
    return (
      <div>
        <div className='col'>
          <input className='searchInput' type="text" id="searchInput" placeholder="Enter a Kit ID..."></input>
          <button onClick={onClick}>Search</button>
          {showResult ? <Result id={result} /> : null}
        </div>
      </div>
    )
  }

  // renders actual result
  function Result(props) {
    var result = kitsGet(props.id)
    // no result
    if (result == -1) {
      return <p>No result found. Please try again.</p>
    }
    // result
    else {
      return <div className='col'>
        <p>Label ID: {result["label_id"]}</p>
        <p>Tracking Num: {result["shipping_tracking_code"]}</p>
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
