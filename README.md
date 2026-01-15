# MEAN Demonstration (backend + Angular UI)

This repository contains a simple MEAN-style project with two main folders:

- `node` — backend (TypeScript/Node) server
- `ui` — Angular frontend application

Overview

- Backend: minimal Node/TypeScript server file `server.ts` in the `node` folder.
- Frontend: Angular app under the `ui` folder (standard Angular CLI structure).

Quick setup

1. Backend

```bash
cd node
npm install
# Development (auto-restart):
npm run start:watch
# Production (run directly):
npm run start:node
```

2. Frontend (Angular)

```bash
cd ui
npm install
npm start
```

Notes

- Backend `package.json` provides `start:node` (node server.ts) and `start:watch` (nodemon server.ts).
- Frontend `package.json` provides `start` (ng serve), `build`, `watch`, and `test` scripts.
