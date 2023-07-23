import "./TickerComponent.css"

function TickerComponent({ticker}){

    let currentData = ticker.data.values[0]

    return(
        <div className="TickerComponent">
        <h1>{ticker.data.meta.symbol}</h1>
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