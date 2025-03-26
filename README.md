Here's the improved and well-structured version of your **README.md** file:  

```md
# GitHub Activity Fetcher  

This project consists of a **Node.js Express server** and a **CLI tool** that fetches recent GitHub activity for a given user.  

---

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

---

## Running the Server  

Start the Express server with:  
```sh
nodemon server/server.js
```
For production, use:  
```sh
npm start
```

---

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

---

## Example Usage  

```sh
github-activity octocat
```
This command will fetch and display the recent activity of the GitHub user **octocat**.

---

## License  
This project is licensed under the **MIT License**.  

---

## Author  
Developed by **Keshvi1209**.  
```

### Changes & Improvements:  
✅ **Better formatting** for readability  
✅ **Consistent code block styling**  
✅ **Clarified installation & usage instructions**  
✅ **Added missing production server command**  
✅ **Improved structure** for easy navigation  

This version makes your **README** more professional and user-friendly. Let me know if you need further changes! 🚀
