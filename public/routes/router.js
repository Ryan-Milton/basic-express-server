'use strict';

const content = require('../../content.json');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Server Home'));

router.get('/content', (req, res) => {
  res.send(content);
});

router.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(new Buffer('<h1>Page Not Found</h1>'));
});

module.exports = router;