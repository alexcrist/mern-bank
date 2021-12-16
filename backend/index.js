const express = require('express');
const cors = require('cors');
const { initDB, getAmount, setAmount } = require('./dal');

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

// =============================================================================
// Banking endpoints

// Endpoint to get dollar amount
app.get('/amount', async (req, res) => {
  const amount = await getAmount();
  res.send({ amount });
});

// Endpoint to update the dollar amount
app.get('/edit/amount/:newValue', async (req, res) => {
  const newDollarAmount = Number(req.params.newValue);
  if (isNaN(newDollarAmount)) {
    res.sendStatus(400);
  } else {
    await setAmount(newDollarAmount);
    res.sendStatus(200);
  }
});

// =============================================================================

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
  initDB();
});
