import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import axios from 'axios';

const App = (props) => {
  const [chartRef, setRef] = useState(React.createRef());

  useEffect (() => {
    axios.get('http://localhost:3000/api/historical-data')
      .then(response => {
        let dates = Object.keys(response.data);
        let prices = dates.map(date => Number(response.data[date].toFixed(2)));
        const btcChart = chartRef.current.getContext("2d");
        new Chart(btcChart, {
          type: 'line',
          data: {
            labels: dates,
            datasets: [
              {
                label: "BTC Closing Price (EUR)",
                data: prices
              }
            ]
          }
        });
      })
      .catch(error => `Error getting hisorical data ${error}`);
  });

  return (
    <div>
      <canvas
        id='BTCChart'
        ref={chartRef}
        style={{width: "600"}, {height: "400"}}
      />
      <br />
      <p>Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a></p>
    </div>
  );
}

export default App
