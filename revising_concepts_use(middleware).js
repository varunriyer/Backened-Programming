const express = require('express');

const app = express();

app.use((req, res) => {
    console.log("Request Method:", req.method); // Will log GET
    res.send(`<h1> Yoo,Family!</h1`);
})

app.listen(8000, () => {
    console.log(`Server running successfully on Port 8000`);
});
