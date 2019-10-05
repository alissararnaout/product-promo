const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));


app.get('/', (req, res) => {
  console.log('home route');
  res.sendFile(path.join(__dirname + '/views/index.html'));
  // this builds localhost:3000/views/index.html
})

app.get('/buy', (req, res) => {
  console.log('buy route');
  res.sendFile(path.join(__dirname + '/views/buy.html'));
})


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});