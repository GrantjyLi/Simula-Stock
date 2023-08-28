import './QTC.css'
import Header from '../SharedComponents/Header/Header.jsx'
import SearchResult from './Components/SearchResults/SearchResults.jsx'
import {useState} from "react"

function App() {
  const [user, setUser] = useState(null)
  
  return (
      <div className='AppMain'>
        <Header setUser = {setUser} pageName = {"Quick Ticker Checker"}/> 
        <SearchResult user = {user}/>
      </div>
  )
}

export default App;