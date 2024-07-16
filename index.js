const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello world');
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Connect to database successfully');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
