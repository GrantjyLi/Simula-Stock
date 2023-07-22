import "./TickerComponent.css"

function TickerComponent({ticker}){
    console.log(ticker.data.timeData);
    return(
        <div className="TickerComponent">
            <h1>{ticker.name}</h1>
            <h3>{"Share price: $" + parseFloat(ticker.data.price).toFixed(2)}</h3>
        </div>
    )
}
export default TickerComponent;