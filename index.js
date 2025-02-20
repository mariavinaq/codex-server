import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import postsRoutes from "./routes/posts-routes.js";
import usersRoutes from "./routes/users-routes.js";
import { newPrompt } from "./anthropic-api.js";
const app = express();
dotenv.config();

const { PORT, BACKEND_URL } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (_req, res) => {
    res.send('Welcome to the Codex server 🧑‍💻')
});

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

app.post("/prompt", async (req, res) => {
    try {
        const newp = await newPrompt(req.body.prompt)
        const parsedCode = JSON.parse(newp.content[0].text)
        res.json({content: [{
                text: parsedCode
            }]
        })
    } catch (error) {
        res.status(500).json({ message: error })
    }
});

app.listen(PORT, () => {
    console.log(`Server running at ${BACKEND_URL}${PORT}`)
});