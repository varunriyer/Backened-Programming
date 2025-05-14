const { error } = require('console');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, 'Static Files/test.jpg'));
});

app.listen(port, (error) => {
    if (!error)
        console.log(`Server running successfully on Port : ${port}`);
    else
        console.log(`Error running server --> ${error}`);
});