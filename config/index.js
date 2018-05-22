const express = require('express'),
      bodyParser = require('body-parser'),
      app = express();

app.use(bodyParser.json());

const PORT = 3050;

app.listen(PORT, () => console.log(`Making axios call on ${PORT}`))