//npm install --save @polygon.io/client-js

const key = "w2pe44x9R7OfO3tvwL3Cfo3RrK8VureD"


const { restClient } = require('@polygon.io/client-js');
const rest = restClient(key, "https://api.polygon.io");


rest.stocks.aggregates("AAPL", 1, "day", "2023-04-012", "2023-04-14").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

//https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=w2pe44x9R7OfO3tvwL3Cfo3RrK8VureD