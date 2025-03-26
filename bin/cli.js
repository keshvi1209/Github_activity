#!/usr/bin/env node

import { program } from "commander";
import axios from "axios";

async function fetchGitHubActivity(username) 
{
    try 
    {
        const response = await axios.get(`http://localhost:5000/user/${username}`);
        const { activities } = response.data;

        console.log(`\n📌 Recent GitHub activity for '${username}':\n`);
        activities.forEach(activity => console.log(activity));
    } 
    catch (error) {
        console.log("❌ Error: Unable to fetch activity. Make sure the server is running.");
    }
}

program
    .argument("<username>", "GitHub username")
    .action(fetchGitHubActivity);

program.parse(process.argv);
