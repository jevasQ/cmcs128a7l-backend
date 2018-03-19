'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
const pdf = require('pdfkit');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const router = require('./router/router');
router(app);

app.listen(3000, () => {
      console.log('Server started');
});
