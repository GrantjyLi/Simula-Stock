import "./TickerComponent.css"
import closeIcon from './images/close-icon.png'

function TickerComponent(props){
    let ticker = props.ticker
    let exit = props.exit
    let currentData = ticker.data.values[0]

    return(
        <div className="TickerComponent">
            <h1 id = "TickerName">{ticker.data.meta.symbol}</h1>
            <img id = "closeButton" src={closeIcon} onClick={()=>{exit(ticker.data.meta.symbol)}}/>

            <div id = "leftData">
                <h3>{"Share price: $" + parseFloat(ticker.price).toFixed(2)}</h3>
                <h3>{"Latest high: $" + parseFloat(currentData.high).toFixed(2)}</h3>
                <h3>{"Latest low: $" + parseFloat(currentData.low).toFixed(2)}</h3>
            </div>
            <div id = "rightData">
                <h3>{"Latest open: $" + parseFloat(currentData.open).toFixed(2)}</h3>
                <h3>{"Latest close: $" + parseFloat(currentData.close).toFixed(2)}</h3>
                <h3>{"Stock volume: " + currentData.volume}</h3>
            </div>
        </div>
    )
}
export default TickerComponent;