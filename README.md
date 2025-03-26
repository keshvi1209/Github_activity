
# GitHub Activity Fetcher  

Sample solution for the github-user-activity challenge from https://roadmap.sh/projects/github-user-activity.

This project consists of a **Node.js Express server** and a **CLI tool** that fetches recent GitHub activity for a given user.  


## Installation  

### 1. Clone the Repository  
```sh
git clone https://github.com/keshvi1209/Github_activity.git
cd Github_activity
```

### 2. Install Dependencies  
```sh
npm install
```

### 3. Configure Environment Variables  
Create a `.env` file in the root directory and add the following:  
```
PORT=5000
```


## Running the Server  

Start the Express server with:  
```sh
nodemon server/server.js
```

## CLI Setup  

To ensure the CLI command works globally, add the following in `package.json`:  

```json
"bin": {
  "github-activity": "./cli.js"
}
```

Also, ensure `cli.js` starts with:  
```javascript
#!/usr/bin/env node
```

### Install the CLI Tool Globally  

#### **Option 1: Using `npm link` (For Development)**  
Run inside the project directory:  
```sh
npm link
```
Now, use the CLI globally:  
```sh
github-activity <GitHub-Username>
```

#### **Option 2: Using `npm install -g .` (For Deployment)**  
Alternatively, install it globally with:  
```sh
npm install -g .
```
Now, run:  
```sh
github-activity <GitHub-Username>
```


## Example Usage  

```sh
github-activity keshvi1209
```
This command will fetch and display the recent activity of the GitHub user **keshvi1209**.
