// Import the IoTData model
import { IoTData } from "../app/models/dataModel";

// Define the structure of processed data
interface ProcessedData {
  averageTemperature: number;
  averageHumidity: number;
  timestamp: Date;
}

// Class to store and manage in-memory data
class InMemoryStorage {
  // Raw IoT data storage
  private data: IoTData[] = [];

  // Processed data storage
  private processedData: ProcessedData[] = [];

  // Method to store raw IoT data
  storeData(data: IoTData): void {
    this.data.push(data);
  }

  // Method to store processed data
  storeProcessedData(processedData: ProcessedData): void {
    this.processedData.push(processedData);
  }


  // Method to retrieve all raw IoT data
  getData(): IoTData[] {
    return this.data;
  }


  // Method to retrieve all processed data
  getProcessedData(): ProcessedData[] {
    return this.processedData;
  }
}

// Create an instance of the InMemoryStorage class for export
export const inMemoryStorage = new InMemoryStorage();
