const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1> Hello World :)</h1>`);
});

app.listen(8000, (error) => {
    if (!error)
        console.log(`Server running successfully on Port 8000`);
    else
        console.log(`Error running server --> ${error}`);
});
