import './QTC.css'
import Header from '../SharedComponents/Header/Header.jsx'
import SearchResult from './Components/SearchResults/SearchResults.jsx'

function App(props) {
  
  return (
      <div className='Main'>
        <Header 
          setUser = {props.setUser} 
          pageName = {"Quick Ticker Checker"}
          userExist = {props.userExist}/>
        <SearchResult 
          user = {props.user}
          userExist = {props.userExist}/>
      </div>
  )
}

export default App;