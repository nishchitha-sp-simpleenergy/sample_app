const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js app deployed in GKE.');
});

app.listen(PORT, () => {
  console.log('Server is running on port',PORT);
});