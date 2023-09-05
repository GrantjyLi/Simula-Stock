import "./TickerComponent.css"
import closeIcon from './images/close-icon.png'
import upArrow from './images/up-arrow.png'
import downArrow from './images/down-arrow.png'
import {useState} from 'react'

export default function TickerComponent(props){
    let ticker = props.ticker
    let exit = props.exit
    let currentData = ticker.data.values[0]
    let symbol = ticker.data.meta.symbol

    const [volume, setVolume] = useState(0)
    const [orderVolume, setOrderVolume] = useState(0)

    let arrow
    (currentData.close > ticker.price)? arrow = upArrow : arrow = downArrow
    return(
        <div className="TickerComponent">
            <div className = "topSection">
                <h1 id = "TickerName">{symbol}</h1>
                <img id = "arrow" src= {arrow}/>
                <img id = "closeButton" src={closeIcon} onClick={()=>{exit(symbol)}}/>
            </div>

            <div className= "dataInfo">
                <div className = "data">
                    <h3>{"Share price: $" + parseFloat(ticker.price).toFixed(2)}</h3>
                    <h3>{"Latest high: $" + parseFloat(currentData.high).toFixed(2)}</h3>
                    <h3>{"Latest low: $" + parseFloat(currentData.low).toFixed(2)}</h3>
                </div>
                <div className = "data">
                    <h3>{"Latest open: $" + parseFloat(currentData.open).toFixed(2)}</h3>
                    <h3>{"Latest close: $" + parseFloat(currentData.close).toFixed(2)}</h3>
                    <h3>{"Stock volume: " + currentData.volume}</h3>
                </div>

            </div>
            
            <div id = "BuySell">
                <div id = "setVolume">
                    <h2 id = "setVolumeText">Set purchase volume: </h2>
                    <input type="number" id = "volumeInput"
                        value = {volume}
                        onChange={(e)=>{
                            if (e.target.value <0) setVolume(0)
                            else if (e.target.value > currentData.volume) setVolume(currentData.volume)
                            else setVolume(e.target.value)
                            }}/>
                    <button  id = "confirmBTN" onClick={()=>{
                        setOrderVolume(volume)
                        props.setAmountInvested(props.amountInvested.symbol = orderVolume)
                        }}>Confirm order</button>
                </div>

                <h2 id = "setVolumeText">Order price: ${orderVolume * parseFloat(ticker.price)}</h2>
                
            </div>
        </div>
    )
}