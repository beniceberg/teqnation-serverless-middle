const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use('', routes);

app.listen(port, () =>
  console.log(`TEQnation app listening on port ${port}!`),
);