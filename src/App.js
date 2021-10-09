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
    <div className="jumbotron container form-group">
      
      
      

      <div class="input-group mb-3">
    <input type="text" className="form-control" placeholder="Search Term" onChange={(e)=> setSearchInput(e.target.value)} />
  <div class="input-group-append">
    <button  type ="button" class="btn btn-primary" onClick={selectView}>Search</button>
    <button  type ="button" class="btn btn-danger" onClick={randomView}>Random</button>
  </div>
</div>

      {searchRandom? <div><h3>{searchRandom.quote}</h3><h5>{searchRandom.author}</h5></div> : null}
    </div>
  );
}
export default App;