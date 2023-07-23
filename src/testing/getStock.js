const apiKey = '297df47f70a8438bb3329c6b9e2499db';
const stockSymbol = 'AAPL'; // Replace with the desired stock symbol
const fetch = require('node-fetch');

const apiUrl = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=1day&apikey=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // The response will contain historical stock data in the 'values' field, with the latest data being the first element
    const latestData = data.values[0];

    const openingPrice = latestData.open;
    const closingPrice = latestData.close;
    const highPrice = latestData.high;
    const lowPrice = latestData.low;

    console.log(`The most recent opening price: ${openingPrice}`);
    console.log(`The most recent closing price: ${closingPrice}`);
    console.log(`The highest price of the day: ${highPrice}`);
    console.log(`The lowest price of the day: ${lowPrice}`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
