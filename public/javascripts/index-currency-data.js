

const key = 'L1O9R8JGGAOX4ZYL';
const functionName = 'CURRENCY_EXCHANGE_RATE';
const from_currency = 'EUR';
const to_currency = 'JPY';
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&from_currency=${from_currency}&to_currency=${to_currency}&apikey=${key}`;

axios.get(apiUrl)
  .then((response) => {
    const { data } = response;
    console.log(data);
    const bidPrice = data['Realtime Currency Exchange Rate']['8. Bid Price'];
    const askPrice = data['Realtime Currency Exchange Rate']['9. Ask Price'];

    console.log('bidPrice', bidPrice);
    console.log('askPrice', askPrice);


    const ctx = document.querySelector('#my-currencies-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Bid Price', 'Ask Price'],
        datasets: [
          {
            label: `Prices - Bid & Ask Prices`,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [bidPrice, askPrice]
          }
        ]
      }
    });

  })
  .catch( (err) => console.log(err));

// AS SOON AS THE PAGE LOADS
// MAKE THE REQUEST TO AV API
// AND DISPLAY DATA