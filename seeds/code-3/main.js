import express from "express";
const app = express();

const BACKEND_URL = "http://localhost:"
const PORT = 5050;

app.use(express.json());

app.get("/", (_req, res) => {
    res.json("Hello world!")
});

app.listen(PORT, () => {
    console.log(`Yay! Server running at ${BACKEND_URL}${PORT}`)
});