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
        <h1 id = 'EnterQeury'>Enter Job Title</h1>
        <input 
            type="text" 
            id="JobInput" 
            onChange={(e) => {setSearch(e.target.value)}}/> 

        <button id = "searchButton" onClick={()=>{
        console.log(searchText)
          setInput(searchText)
        }}>search
        </button>
        
        <img id = "searchIcon" 
        src="/icons/search-icon.png" 
        alt="" 
        onClick={() => { 
          console.log(searchText)
          setInput(searchText)
          
        }}/>
            
        {<SearchResult props = {input}/>}
        
      </div>

    </div>

  );
}


export default App;


