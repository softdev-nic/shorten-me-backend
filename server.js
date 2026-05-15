const express = require('express');
const app = express();
const db = require('./db')
const Shortlinks = require('./View/Shortlinks')
const CreateLink = require('./View/Controller/createLink')
const searchById = require('./View/Controller/searchById')
const cors = require('cors')
require('dotenv').config();
const port = 3000

app.use(cors())
app.use(express.json());
app.post('/createlink', CreateLink);
app.get('/:id', searchById)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})
