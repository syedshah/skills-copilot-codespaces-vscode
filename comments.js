// create web server
// load express
const express = require('express');
// create express app
const app = express();
// load body-parser
const bodyParser = require('body-parser');
// load comments file
const comments = require('./comments.js');
// load fs
const fs = require('fs');
// load path
const path = require('path');
// load cors
const cors = require('cors');
// set up cors
app.use(cors());
// set up bodyParser
app.use(bodyParser.json());
// set up express to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// create a get request to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// create a post request to add a comment
app.post('/comments', (req, res) => {
    // add a comment to the comments array
    comments.push(req.body);
    // write the new comments array to the comments.json file
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) {
            // if there is an error, send a status code of 500
            res.sendStatus(500);
        } else {
            // if there is no error, send a status code of 201
            res.sendStatus(201);
        }
    });
});

// set up server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

