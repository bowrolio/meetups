### Meetups Demo Application

Demonstration application demonstrating Node.js / Express backend API and authentication with a React frontend.

Not production ready.

# Quick start
1. `nvm use` - set node to version 18
2. `npm run setup` - install dependencies
3. `npm start` - start backend server
4. Open `http://localhost:3001` in a browser

# ☕ Developer Environment
From project root directory:

`nvm use` - set node to correct version

`npm run dev` - uplifts frontend React server `http://localhost:3000` and backend node server `http://localhost:3001` concurrently.

`npm run lint` - run lint code analysis

# 🎨 Frontend

## Available scripts
`npm install`

Install package dependencies.

`npm start`

Run the developer environment. React will uplift a dev server on `http://localhost:3000`

`npm run build`

Build static files ready for BE. This is output to the `/build` directory. Copy dir to /backend

`npm run lint`

Linting code analysis

`npm run format`

Code styling using prettier

# 💻 Backend

## Available scripts
`npm install`

Install package dependencies.

`npm start`

Run the developer environment. Express will uplift a server on `http://localhost:3001`

