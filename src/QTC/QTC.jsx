import './QTC.css'
import Header from '../SharedComponents/Header/Header.jsx'
import SearchResult from './Components/SearchResults/SearchResults.jsx'

function App(props) {
  
  return (
      <div className='Main'>
        <Header setUser = {props.setUser} pageName = {"Quick Ticker Checker"}/> 
        <SearchResult user = {props.user}/>
      </div>
  )
}

export default App;