import { Request, Response } from "express";
import { IoTData } from "../models/dataModel";
import { DataService } from "../services/dataService";
import { inMemoryStorage } from "../../data/inMemoryStorage";
import { SimulationService } from "../services/simulationService";
import { AverageCalculationService } from "../services/averageCalculationService";

export class DataController {
  private dataService: DataService;
  private simulationService: SimulationService;
  private averageCalculationService: AverageCalculationService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.simulationService = new SimulationService(dataService);
    this.averageCalculationService = new AverageCalculationService();

    // Set up interval to simulate data every hour (3600000 milliseconds)
    setInterval(() => {
      this.simulationService.sendSimulatedData();
    }, 3600000);
  }
  // API endpoint to receive IoT data
  receiveData(req: Request, res: Response): void {
    try {
      const { temperature, humidity } = req.body as IoTData;

      // Basic validation
      if (
        temperature === undefined ||
        isNaN(temperature) ||
        humidity === undefined ||
        isNaN(humidity)
      ) {
        throw new Error("Invalid data format");
      }
      // Process the received data
      this.dataService.processData({
        temperature,
        humidity,
        timestamp: Date.now(),
      });
      // Respond with success message
      res.status(200).json({ message: "Data received successfully" });
    } catch (error: any) {
      // Respond with an error message
      console.error("Error:", error.message);
      res.status(400).json({ error: error.message });
    }
  }
  // API endpoint to retrieve stored raw data
  getStoredData(req: Request, res: Response): void {
    try {
      const storedData = this.dataService.getStoredData();
      // Respond with the stored raw data
      res.status(200).json(storedData);
    } catch (error: any) {
      console.error("Error:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  // API endpoint to calculate and retrieve average values
  calculateAverageValues(req: Request, res: Response): void {
    try {
      const storedData = inMemoryStorage.getData();
      // Calculate average values
      const { averageTemperature, averageHumidity } =
        this.averageCalculationService.calculateAverageValues(storedData);
      // Respond with the calculated average values
      res.status(200).json({ averageTemperature, averageHumidity });
    } catch (error: any) {
      console.error("Error:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
