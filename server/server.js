/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Warehouse = require('./model');

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', async (req, res) => {
  try {
    const { zones } = req.body;
    console.log(zones);
    const warehouse = await Warehouse.create({ zones: JSON.stringify(zones) });
    res.status(201).json({ message: 'Success!', warehouse });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

app.use('/', (req, res) => {
  res.status(404).send('Invalid route endpoint');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
