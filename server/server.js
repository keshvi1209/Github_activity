import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config(); 

const server = express();
server.use(cors());
server.use(express.json());

server.get('/user/:username', async (req, res) => {
    const username = req.params.username;
    const url = `https://api.github.com/users/${username}/events`;

    try {
        const response = await axios.get(url, {
            headers: { "User-Agent": "node.js" }
        });

        if (response.data.length === 0) {
            return res.json({ message: `No recent activity found for '${username}'` });
        }

        const activities = response.data.slice(0, 10).map(event => {
            const eventType = event.type;
            const repoName = event.repo.name;
            const action = {
                "PushEvent": "Pushed commits",
                "PullRequestEvent": "Opened a pull request",
                "IssuesEvent": "Opened an issue",
                "ForkEvent": "Forked",
                "WatchEvent": "Starred",
                "CreateEvent": "Created a repository",
            }[eventType] || "Performed an action";

            return `✅ ${action} in ${repoName}`;
        });

        res.json({ username, activities });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch GitHub activity." });
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port number: ${PORT}`));
