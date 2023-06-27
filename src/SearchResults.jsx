import React, { useState, useEffect } from "react";
import Axios from 'axios'
import './input.css'

const myKey = "297df47f70a8438bb3329c6b9e2499db";
function Results() {
    const [stockData, setData] = useState("")
    const [inputText, setInput] = useState("")
    const [searchText, setSearch] = useState("")

    let url;
    const getData = ()=>{
        url = 'https://api.twelvedata.com/price?symbol=' + searchText + '&apikey=' + myKey;

        if(searchText === ""){return}

        Axios.get(url).then((response)=>{
            console.log(searchText + " is searched")
            setData(searchText + ": $"+ parseFloat(response.data.price).toFixed(2))
            console.log(response)
            
        })
    }
   
    return(
        <div>  
            <div className="input">
                <h1 id = 'EnterQeury'>Enter Company's stock Title</h1>
                
                <input 
                    type="text" 
                    id="nameInput" 
                    onChange={(e) => {setInput(e.target.value)}}
                /> 

                <button id = "searchButton" onClick={()=>{
                        setSearch(inputText)
                        getData()
                    }

                }>search
                </button>

            </div>

            <div className="DropDownMenu">

                <div className="Items">
                    {stockData}
                    <JobComponent job = {stockData}/>
                        
                </div>

            </div>
        </div>
    )
}


function JobComponent({data}){
    return(
        <div className="DropDownItem">
            <h1>{data}</h1>
        </div>
    )

}
export default Results;