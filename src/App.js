import './App.css';

function App() {

  function handleSearchClick(input) {
    console.log(input)
  }

  return (
    <div className='App'>
      <input className='searchInput' type="text" id="searchInput"></input>
      <button onClick={() => handleSearchClick(document.getElementById("searchInput"))}>Search</button>
    </div>
  );
}

export default App;
