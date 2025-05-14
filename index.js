import express from "express";

import homeRouter from "./Using-Router/home.js"
import loginRouter from "./Using-Router/login.js"

const app = express();

app.use('/', homeRouter);
app.use('/', loginRouter);

app.listen(3000, () => {
    console.log("Server is running");
});