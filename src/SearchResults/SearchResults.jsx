import { useState} from "react";
import Axios from 'axios'
import './SearchResults.css'
import TickerComponent from './TickerComponent.jsx'
import searchIcon from './images/search-icon.png'

const myKey = process.env.REACT_APP_12DAT_API_KEY
function Results({user}) {

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

    function removeTicker(name){
        name = name.toLowerCase()
        setList((stocks) =>
            stocks.filter((stock) => stock.name !== name)
        );
    }

    function saveList(){
        console.log(user);
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