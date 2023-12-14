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

  // Method to calculate and retrieve the average temperature
  getAverageTemperature(): number {
    return this.calculateAverage("temperature");
  }

  // Method to calculate and retrieve the average humidity
  getAverageHumidity(): number {
    return this.calculateAverage("humidity");
  }

  // Private method to calculate the average of a specified property in the IoTData
  private calculateAverage(property: keyof IoTData): number {
    // Check if there is data available
    if (this.data.length === 0) {
      return 0;
    }

    // Calculate the total sum of the specified property across all data
    const total = this.data.reduce((sum, data) => sum + data[property], 0);

    // Calculate and return the average
    return total / this.data.length;
  }

  // Method to retrieve all raw IoT data
  getData(): IoTData[] {
    return this.data;
  }

  // Method to retrieve the average temperature and humidity as an object
  getAverageValue(): { averageTemperature: number; averageHumidity: number } {
    return {
      averageTemperature: this.getAverageTemperature(),
      averageHumidity: this.getAverageHumidity(),
    };
  }

  // Method to retrieve all processed data
  getProcessedData(): ProcessedData[] {
    return this.processedData;
  }
}

// Create an instance of the InMemoryStorage class for export
export const inMemoryStorage = new InMemoryStorage();
