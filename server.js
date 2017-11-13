// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//Get our API routes
const api = require('./server/routes/api');

const app = express();

//Parses for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//set our API routes
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API is running at port: ${port}`));