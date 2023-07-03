import React, { useState } from "react";
import Axios from 'axios'
import './input.css'

const myKey = "297df47f70a8438bb3329c6b9e2499db";
function Results() {
    //state elements
    const [searchText, setSearch] = useState("")
    const [stockList, setList] = useState([])

    //getting data using api
    let url;
    const getData = ()=>{
        if(searchText === ""){return}
        url = 'https://api.twelvedata.com/price?symbol=' + searchText + '&apikey=' + myKey;

        //using Axios to get an API response
        Axios.get(url).then((response)=>{
            
            let b = false
            stockList.forEach(stock => {
                if(stock.name === searchText){
                    console.log("stock was already found");
                    b = true
                    return;
                }
            });if(b){return}
            

            if(response.data.code === 400){
                console.log(searchText + " was not found");
                return;
            }

            //handling valid data return
            console.log(searchText + " is searched")
            const arr = [...stockList, {
                "name" : searchText, 
                "data": response
            }]
            
            setList(arr)
        })
        console.log(stockList);
    }
   
    return(
        <div>  
            <div className="input">
                <h1 id = 'EnterQeury'>Enter Company's stock Title</h1>
                
                <input 
                    type="text" 
                    id="nameInput" 
                    onChange={(e) => {setSearch(e.target.value)}}
                /> 

                <button id = "searchButton" onClick={getData}>
                    Add Stock name
                </button>

            </div>

            <div className="DropDownMenu">

                <div className="Items">
                    {stockList.map(stock =>(
                        <JobComponent data ={stock}/>
                    ))
                    }

                </div>
            </div>
        </div>
    )
}


function JobComponent({data}){
    return(
        <div className="DropDownItem">
            <h1>{data.name + ": $" + parseFloat(data.data.data.price).toFixed(2)}</h1>
        </div>
    )

}
export default Results;