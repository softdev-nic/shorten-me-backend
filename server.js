const express = require('express');
require('./db');
 
 
const cors = require('cors');
const app = express();
const port = 3000

app.use(cors())
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

