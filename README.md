GitHub Activity Fetcher

This project consists of a Node.js Express server and a CLI tool that fetches recent GitHub activity for a given user.

Installation

1. Clone the repository:
   git clone https://github.com/keshvi1209/Github_activity.git
   cd Github_activity

2. Install dependencies:
   npm install

3. Create a `.env` file in the root directory and set the port number:
   PORT=5000

Running the Server

To start the Express server, run:
nodemon server/server.js

CLI Setup

To ensure the CLI command works globally, make sure package.json includes the following:
"bin": {
  "github-activity": "./cli.js"
}

Also, ensure cli.js starts with:
#!/usr/bin/env node

Install the CLI Tool Globally

Option 1: Using npm link (For Development)

Run inside the project directory:
npm link

Now, you can use the command globally:
github-activity <GitHub-Username>

Option 2: Using npm install -g . (For Deployment)

Alternatively, install it globally like this:
npm install -g .

Now, run:
github-activity <GitHub-Username>

