import './App.css'
import Header from './Header/Header.jsx'
import SearchResult from './SearchResults/SearchResults.jsx'
import {useState} from "react"

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <div className='AppMain'>
      <Header setUser = {setUser}/> 
      <SearchResult user = {user}/>
    </div>
  )
}

export default App;