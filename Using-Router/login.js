import express from "express";

const router = express.Router()

router.get('/login', (req, res, next) => {
    res.send("This is the login request");
});

export default router;
