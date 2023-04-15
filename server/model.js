/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;
// mongo connection uri
const URI = 'mongodb+srv://lisa:oAegf6PaJl5L6JKG@cluster0.d8vtcgu.mongodb.net/test';

// useNewURLParser: use MongoDB driver's new URL parser
// useUnifiedTopology: use new engine for monitoring state of servers
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(URI, connectionParams);

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const warehouseSchema = new Schema({
  zones: { type: String, required: true },
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

module.exports = Warehouse;
