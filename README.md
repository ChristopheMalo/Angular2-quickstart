# Angular2-quickstart
The official project to quick start with Angular 2

This project use TypeScript - new to Angular 2

## How to
- Install node and npm if not already on the machine
- Create a git remote repository
- Clone on the local machine
- Go to the local folder
- Create the tsconfig.json file (guide to TypeScript compiler)
- Code the typings.json file
- Code the package.json file to manage dependencies (new to Angular 2 - all dependencies with NPM)
- Leave blanck dependencies and devdependencies
- In console, install dependencies - to check version:
    - npm install angular2 systemjs es6-shim reflect-metadata rxjs zone.js --save
    - npm install concurrently lite-server typescript typings --save-dev
- Corrected dependencies version if error type 'UNMET PEER DEPENDENCY' (reflect-metadata and rxjs)
- Remove node_modules folder
- and install dependencies: npm install - due to the call of postinstall script
- 2 folders are installed after nmp install: node_modules and typings
- Ignore this 2 folders in .gitignore file
- Create the app sub-folder
- Code the app component (app.component.ts)(hosts the client user experience)
- Code the main file
- Code the web index file
- Code the CSS

## Memento package scripts
- npm start - runs the compiler and a server at the same time, both in "watch mode"
- npm run tsc - runs the TypeScript compiler once
- npm run tsc:w - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them
- npm run lite - runs the lite-server, a light-weight, static file server with excellent support for Angular apps that use routing
- npm run typings - runs the typings tool
- npm run postinstall - called by npm automatically after it successfully completes package installation. This script installs the TypeScript definition files defined in typings.json
