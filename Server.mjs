console.log("Hello World first Server");

import express from 'express';
const app = express();
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World! first server' + new Date());
})
app.get('/profile', (req, res) => {
  res.send('Hello this is a profile page!' + new Date());
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})