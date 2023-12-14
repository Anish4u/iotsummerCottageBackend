import { IoTData } from "../models/dataModel";
import { DataService } from "../services/dataService";

export class SimulationService {
  private dataService: DataService;
  // Constructor to initialize the SimulationService with a DataService instance
  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  // Generate simulated IoT data with random temperature, humidity, and current timestamp

  generateSimulatedData(): IoTData {
    const temperature = Math.ceil(Math.random() * 30 + 20);
    const humidity = Math.ceil(Math.random() * 50 + 30);
    return { temperature, humidity, timestamp: Date.now() };
  }
  //  Send simulated data to the connected DataService

  sendSimulatedData(): void {
    try {
      const simulatedData: IoTData = this.generateSimulatedData();
      // Process the simulated data using the connected DataService
      this.dataService.processData(simulatedData);
      // Log success message
      console.log("Simulated data sent successfully:", simulatedData);
    } catch (error: any) {
      // Log error if there's an issue sending simulated data
      console.error("Error sending simulated data:", error.message);
    }
  }
}
