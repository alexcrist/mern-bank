const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

// =============================================================================
// Banking endpoints

let dollarAmount = 13;

// Endpoint to get dollar amount
app.get('/amount', (req, res) => {
  res.send({
    amount: dollarAmount
  });
});

// Endpoint to update the dollar amount
app.get('/edit/amount/:newValue', (req, res) => {
  const newDollarAmount = Number(req.params.newValue);
  if (isNaN(newDollarAmount)) {
    res.sendStatus(400);
  } else {
    dollarAmount = newDollarAmount;
    res.sendStatus(200);
  }
});

// =============================================================================

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
