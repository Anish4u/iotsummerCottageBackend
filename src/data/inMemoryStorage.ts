// Import the IoTData model
import { IoTData } from "../app/models/dataModel";



// Class to store and manage in-memory data
class InMemoryStorage {
  // Raw IoT data storage
  private data: IoTData[] = [];

  // Method to store raw IoT data
  storeData(data: IoTData): void {
    this.data.push(data);
  }

  // Method to retrieve all raw IoT data
  getData(): IoTData[] {
    return this.data;
  }
}

// Create an instance of the InMemoryStorage class for export
export const inMemoryStorage = new InMemoryStorage();
