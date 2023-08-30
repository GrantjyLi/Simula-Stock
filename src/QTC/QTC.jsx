import './QTC.css'
import Header from '../SharedComponents/Header/Header.jsx'
import SearchResult from './Components/SearchResults/SearchResults.jsx'

function App({props}) {
  
  return (
      <div className='Main'>
        <Header props = {props} pageName = {"Stock Searcher"}/>
        <SearchResult props = {props}/>
      </div>
  )
}

export default App;