import React, { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import SearchResult from './SearchResults.jsx'

function App() {
  
  return (
    <div className='AppMain'>
      <Header /> 

      <SearchResult />

    </div>

  );
}


export default App;


