## IoT Device Data Handling
This project is a backend system implemented in TypeScript to handle data from IoT devices deployed in summer cottages throughout Finland. The system receives, processes, and stores data from simulated IoT devices, focusing on periodic data updates such as temperature and humidity.

## Prerequisites

Make sure you have latest version of Node.js and npm installed on your machine.

- Node.js: [https://nodejs.org/]
- npm: [https://www.npmjs.com/]

## Installation for Project

```bash
$ npm install

```
##  How to build the Project

```bash
# build
$ npm run build
```

##  How to start the Server
```bash
# start
$ npm start
```
##  How to Test the stored data on server
```bash
# test
$ npm test
```

## File Structure For Project
```
├── src
│   ├── app
│   │   ├── controllers
│   │   │   └── dataController.ts
│   │   ├── models
│   │   │   └── dataModel.ts
│   │   └── services
│   │       └── averageCalculationService.ts
│   │       └── dataServices.ts
│   │       └── simulationService.ts
│   ├── data
│   │   └── inMemoryStorage.ts

│   ├── app.ts
│   └── server.ts
│  
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```


## How to test end points

We have 3 endpoints added as part of this App.

1)Route to receive IoT data via POST request
```
POST http://localhost:3000/api/receive-data
Body: 
JSON{"temperature": 25, "humidity": 50}
```
2)Route to get stored IoT data via GET request
```
GET http://localhost:3000/api/stored-data
```
3)Route to get average values via GET request
```
GET http://localhost:3000/api/average-values
```

