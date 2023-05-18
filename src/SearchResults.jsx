import React, { useState } from "react";
import jobs from "./googleScraper.mjs"

function Results({props}) {
    const [jobsVisable, setVisable] = useState(true)

    const jobs =[]

    for(let i=0; i<10; i++){
        jobs.push(props)
    }

    if (props === ""){
        return(
            <div>
                <h1>No job Entered</h1>
            </div>
        )

    }else{

        return(
            <div className="DropDownMenu">
                <div onClick={()=>setVisable(!jobsVisable)}>
                    <h1>Jobs:</h1>
                </div>

                <div className="Items">
                    {jobsVisable ?
                    jobs.map((title) =>(
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