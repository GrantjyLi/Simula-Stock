import React, { useState } from 'react'
import './App.css'
import './input.css'
import Header from './header.jsx'
import SearchResult from './SearchResults.jsx'

function App() {
  const [searchText, setSearch] = useState("")
  const [input, setInput] = useState("")
  
  return (
    <div className='AppMain'>
      <Header /> 
      
      <div className='Input'>
        <h1 id = 'EnterQeury'>Enter Company's stock Title</h1>
        <input 
          type="text" 
          id="JobInput" 
          onChange={(e) => {setSearch(e.target.value)}}
        /> 

        <button id = "searchButton" onClick={()=>{
          console.log(searchText + " is searched")
          console.log("pizza");
          setInput(searchText)
        }}>search
        </button>
        
        {<SearchResult props = {input}/>}
        
      </div>

    </div>

  );
}


export default App;


