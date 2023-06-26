import React, { useState } from "react";
import Axios from 'axios'

const myKey = "297df47f70a8438bb3329c6b9e2499db";
function Results({props}) {
    const [jobsVisable, setVisable] = useState(true)

    const jobs =[]

    const getData = ()=>{
        props = props.trim()
        let url = 'https://api.twelvedata.com/price?symbol=' + props + '&apikey=' + myKey;
        console.log(url);
        Axios.get(url).then((data)=>{
            console.log(data);
        })
    }

    if (props === ""){
        return(
            <div>
                <h1>No name Entered</h1>
            </div>
        )

    }else{
        console.log("cheese");
        getData()
        return(
            <div className="DropDownMenu">
                <div onClick={()=>setVisable(!jobsVisable)}>
                    <h1>Jobs:</h1>
                </div>

                <div className="Items">
                    {jobsVisable ? jobs.map((title) =>(
                    
                    <JobComponent job = {title}/>
                    
                    )): 
                    ()=>{}}
                </div>

                
            </div>
        )
    }
}

function JobComponent({job}){
    return(
        <div className="DropDownItem">
            <h1>{job}</h1>
        </div>
    )

}
export default Results;