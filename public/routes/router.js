'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Hello'));

router.post('/save', (req, res) => {
  res.send(JSON.stringify(req.route));
});

router.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(new Buffer('<h1>Page Not Found</h1>'));
});

module.exports = router;