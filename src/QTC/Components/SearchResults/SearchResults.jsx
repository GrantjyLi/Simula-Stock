import { useState} from "react";
import Axios from 'axios'
import './SearchResults.css'
import TickerComponent from './TickerComponent.jsx'
import searchIcon from './images/search-icon.png'
import { fireStoreDB } from '../../../firebase.js'
import { doc, updateDoc } from "firebase/firestore";

const myKey = process.env.REACT_APP_12DAT_API_KEY
function Results({props}) {

    const maxListNum = 5;

    //state elements
    const [searchText, setSearch] = useState("")
    const [stockList, setList] = useState([])

    //getting data using api
    let priceURL;
    let dataURL;
    async function getData(){
        if(searchText === "")return

        let flag = false;
        stockList.forEach(stock => {
            if(stock.name === searchText){
                alert("stock was already found");
                flag = true
                return
            }
        });if(flag)return

        priceURL = 'https://api.twelvedata.com/price?symbol=' + searchText + '&apikey=' + myKey
        dataURL = 'https://api.twelvedata.com/time_series?symbol='+ searchText +'&interval=1day&apikey=' + myKey
        //using Axios to get an API response
        try{
            const priceResponse = await Axios.get(priceURL);
            
            if(priceResponse.data.code === 400){
                alert(searchText + " was not found");
                return
            }

            const dataResponse = await Axios.get(dataURL);

            //handling valid data return
            const arr = [...stockList, {
                "name" : searchText, 
                "price": priceResponse.data.price,
                "data": dataResponse.data}
            ]
            
            setList(arr)
        }catch(error){alert("couldn't get data")}
    }

    //remove ticker from current list
    function removeTicker(name){
        name = name.toLowerCase()
        setList((stocks) =>
            stocks.filter((stock) => stock.name !== name)
        );
    }

    //save current list to a new watchlist
    async function saveList(){
        if (props.user == null){ //login check
            alert("Not logged in")
            return
        }

        //checking if user already has data
        props.userExist().then(async result =>{
            if(result >= 0){//result is the current number of lists
                if (result > maxListNum){//max number of watch lists
                    alert("You have ran out of lists - " + maxListNum)
                    return
                }
                
                let listName = "Watchlist-" + result

                try {//add new entry to Watch List doc
                    await updateDoc(doc(fireStoreDB, "UserWatchLists", props.user.uid + "WL"), {
                        [listName] : stockList
                    })
                } catch (e) {console.log("Error storing list: ", e); return}
                try {//add new entry to number of list doc
                    await updateDoc(doc(fireStoreDB, "UserWatchLists", props.user.uid + "NL"), {
                        numLists : (result +1)
                })
                } catch (e) {console.log("Error storing list: ", e); return}
            }

        })
    }
    
    return(
        <div className="SearchResults">  

            <div id="input">
                <input 
                    type="text" 
                    id="textInput" 
                    placeholder = "Enter stock Ticker Name"
                    onChange={(e) => {setSearch(e.target.value)}}
                    onKeyPress = {(e) =>{ if (e.key === "Enter") getData()}}
                    tabIndex = "0"    
                /> 
                <img id = "searchIcon" src={searchIcon} onClick={getData}/>
            </div>

            <button id = "saveButton" onClick={saveList}>
                Save List
            </button>

            <div className="DropDownMenu">
                <div className="Items">
                    {stockList.map(stock =>(
                        <TickerComponent ticker ={stock} exit = {removeTicker}/>
                    ))
                    }

                </div>
            </div>

        </div>
    )
}
export default Results;