// create web server
// create a route to get comments
// create a route to post comments
// create a route to delete comments

// Path: index.js
// import express
// import comments.js
// create web server
// use comments.js as middleware

// Path: comments.js
// create a route to get comments
// create a route to post comments
// create a route to delete comments

// Path: index.js
// import express
// import comments.js
// create web server
// use comments.js as middleware

const express = require('express');
const comments = require('./comments');

app.use('/comments', comments);

app.listen(3000, () => {
        console.log('Server is listening on port 3000');
});

// Path: comments.js
// Remove the duplicate declaration of 'router'
router.get('/', (req, res) => {
    res.send('Get all comments');
});

router.post('/', (req, res) => {
    res.send('Post a comment');
});

router.delete('/', (req, res) => {
  res.send('Delete a comment');
});

module.exports = router;

// Path: index.js
const express = require('express');
const app = express();
const comments = require('./comments');

app.use('/comments', comments);

app.listen(3000, () => {
        console.log('Server is listening on port 3000');
});

// Path: comments.js
const express = require('express');
// Remove the duplicate declaration of 'router'
// const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all comments');
});

router.post('/', (req, res) => {
    res.send('Post a comment');
});

router.delete('/', (req, res) => {
  res.send('Delete a comment');
});

module.exports = router;

// Path: index.js
const comments = require('./comments');

app.use('/comments', comments);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Path: comments.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all comments');
});

router.post('/', (req, res) => {
    res.send('Post a comment');
});

router.delete('/', (req, res) => {
    res.send('Delete a comment');
});
