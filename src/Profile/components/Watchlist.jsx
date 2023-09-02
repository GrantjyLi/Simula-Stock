import './Watchlist.css'
import downArrow from './images/down-arrow.png'
import upArrow from './images/up-arrow.png'
import neutralLine from './images/neutral-line.png'
import { useState, useEffect } from 'react'

export default function Watchlist(props){
    const watchlistData = props.watchlistData
    const [netGain, setNetGain] = useState(0) // -1 is loss, 1 is gain, 0 is neither
    const [gainImage, setGainImage] = useState(neutralLine)
    const [WLDescription, setWLDescription] = useState("")

    useEffect(()=>{
        switch (netGain){
            case 0:
                setGainImage(neutralLine)
                setWLDescription("No change")
                break
            case 1:
                setGainImage(upArrow)
                setWLDescription("Gain")
                break
            case -1:
                setGainImage(downArrow)
                setWLDescription("Loss")
                break
        }
    },[])
    return (
        <div className='WatchlistMain'>
            <img src={gainImage} alt="" id = "gainImage" />
            
            <div id = "watchlistData">
                <h2>Whatchlist {props.index}</h2>
                <h2 id = "WLDescription">{WLDescription}</h2>
            </div>
        </div>
    )
}
