import express, { Application } from "express";
import { DataController } from "./app/controllers/dataController";
import { DataService } from "./app/services/dataService";

const app: Application = express();

// Initialize DataService and DataController instances
const dataService: DataService = new DataService();
const dataController: DataController = new DataController(dataService);

// Use middleware to parse JSON data in incoming requests
app.use(express.json());

// Define API routes and connect them to corresponding methods in the DataController

// Route to receive IoT data via POST request
app.post("/api/receive-data", (req, res) =>
  dataController.receiveData(req, res)
);

// Route to get average values via GET request
app.get("/api/average-values", (req, res) =>
  dataController.calculateAverageValues(req, res)
);

// Route to get stored IoT data via GET request
app.get("/api/stored-data", (req, res) =>
  dataController.getStoredData(req, res)
);

export { app };
