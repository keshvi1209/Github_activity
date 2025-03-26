GitHub Activity Fetcher

This project consists of a Node.js Express server and a CLI tool that fetches recent GitHub activity for a given user.

Installation

1. Clone the repository:
   git clone https://github.com/your-repo/github-activity-fetcher.git
   cd github-activity-fetcher

2. Install dependencies:
   npm install

3. Create a `.env` file in the root directory and set the port number:
   PORT=5000

Running the Server
To start the Express server, run:
nodemon server/server.js

Using the CLI Tool Globally

1. Install the CLI tool globally:
   npm install -g .
   
2. Run the CLI tool from anywhere:
   github-activity <GitHub-Username>

