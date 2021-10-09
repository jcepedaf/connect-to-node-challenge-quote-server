import './App.css';
import { useState } from 'react';
function App() {
  const [searchRandom, setSearchRandom] = useState();
  const [searchInput, setSearchInput] = useState();
  
  const randomView = () =>{
    fetch("http://localhost:5000/quotes/random")
      .then(res => res.json())
      .then(data => setSearchRandom(data));
  }

    const selectView = () =>{
      fetch(`http://localhost:5000/quotes/search?term=${searchInput}`)
      .then(res => res.json())
      .then(data => data.length>0 ? setSearchRandom(data[0]) : setSearchRandom({"quote":"No Results", "author":""}));
  }



  return (
    <div className="input-group p-5">
      <input type="text" className="form-control m-5" placeholder="Search Term" onChange={(e)=> setSearchInput(e.target.value)} />
      <button className ="btn btn-outline-secondary m-5" type ="button" onClick={selectView}>Search</button>
      <button className ="btn btn-outline-secondary m-5" type ="button" onClick={randomView}>Random</button>
      {searchRandom? <div><h1>{searchRandom.quote}</h1><h1>{searchRandom.author}</h1></div> : null}
    </div>
  );
}
export default App;