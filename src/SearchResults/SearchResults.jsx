import React, { useState} from "react";
import Axios from 'axios'
import './SearchResults.css'
import TickerComponent from './TickerComponent.jsx'
import searchIcon from './images/search-icon.png'

const myKey = "297df47f70a8438bb3329c6b9e2499db";
function Results() {
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
                console.log("stock was already found");
                flag = true
                return
            }
        });if(flag)return

        priceURL = 'https://api.twelvedata.com/price?symbol=' + searchText + '&apikey=' + myKey
        dataURL = 'https://api.twelvedata.com/time_series?symbol='+ searchText +'&interval=0.99min&apikey=' + myKey
        //using Axios to get an API response
        
        try{
            const priceResponse = await Axios.get(priceURL);
            
            if(priceResponse.data.code === 400){
                console.log(searchText + " was not found");
                return
            }

            const dataResponse = await Axios.get(dataURL);

            //handling valid data return
            console.log(searchText + " is searched")
            const arr = [...stockList, {
                "name" : searchText, 
                "data": {
                    "price": priceResponse.data.price,
                    "timeData": dataResponse.data}
            }]
            
            setList(arr)
        }catch(error){console.log("couldn't get data")}
        
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

            <div className="DropDownMenu">

                <div className="Items">
                    {stockList.map(stock =>(
                        <TickerComponent ticker ={stock}/>
                    ))
                    }

                </div>
            </div>
        </div>
    )
}
export default Results;