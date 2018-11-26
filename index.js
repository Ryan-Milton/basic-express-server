'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./public/routes/router.js');

app.use(routes);

app.listen(port, () => console.log(`Listening on port ${port}`));