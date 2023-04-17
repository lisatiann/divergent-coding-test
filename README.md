# Getting Started

## Installation

1. From the directory you would like to store the repo, clone the repository:
```
git clone https://github.com/lisatiann/divergent-coding-test.git
```

2. Install the node packages for both the serve and client
```
npm install
```
3. Build the frontend code
```
npm run build
```
This should create a build folder that will be located in the root directory

4. Run the frontend server
```
npm run dev
```
It should be running in http://localhost:8080

5. Run the backend server
```
npm run server
```
The server should be running in http://localhost:3000

## Database

Please create a free cluster on [MongoDB's website](https://www.mongodb.com/) and replace the current URI in the "model.js" file with your own.


