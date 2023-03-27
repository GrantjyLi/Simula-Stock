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
        
        <img id = "searchIcon" 
        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" 
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


