const express = require('express')

const app = express();
const port = 3000;

app.use(express.json());
app.post('/', (req, res) => {
    const { name } = req.body;

    res.send(`Welcome, ${name}`);
});

app.listen(port, (error) => {
    if (!error)
        console.log(`Server is successfully running on ${port}`);
    else
        console.log(`Error running server: ${error}`);
});

