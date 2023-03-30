const express = require('express');
const MongoCLient = require('mongodb').MongoClient;

const app = express();

app.listen(3000, () => {
  console.log('App listening on port 3000');
});