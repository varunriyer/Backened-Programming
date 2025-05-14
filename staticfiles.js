const e = require('express');
const express = require('express');

const app = express();
const port = 3000;

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'Static Files')))

app.listen(port, (error) => {
    if (!error)
        console.log(`Server running successfully on port ${port} `);
    else
        console.log(`Error running server: ${error}`);
})