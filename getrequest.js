const express = require('express');

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

app.listen(port, (error) => {
    if (!error)
        console.log(`Server running successfully on ${port}`);
    else
        console.log("Error occurred and server can't start", error);
});