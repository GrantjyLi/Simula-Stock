const request = require('request');
let myKey = "297df47f70a8438bb3329c6b9e2499db";

async function getPrice(tickers){

    var url = 'https://api.twelvedata.com/price?symbol=' + tickers.toString() + ' &apikey=' + myKey;

    request.get({
        
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    
    }, (err, res, data) => {
        
        if (err) {
            console.log('Error:', err);
        } else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        } else {
            // data is successfully parsed as a JSON object:
            console.log(data);
        }   
    });
}

let stocks = ["AAPL", "GOOGL"]
getPrice(stocks)