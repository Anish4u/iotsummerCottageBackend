// Import the IoTData,in-memory storage model
import { IoTData } from "../models/dataModel";
import { inMemoryStorage } from "../../data/inMemoryStorage";

// Service class to handle IoT data processing
export class DataService {
  /**
   * Processes incoming IoT data by storing it in the in-memory storage.
   * @param data - The IoT data to be processed and stored.
   */
  processData(data: IoTData): void {
    // Store the incoming data in the in-memory storage
    inMemoryStorage.storeData(data);
  }

  /**
   * Retrieves the stored IoT data from the in-memory storage.
   * @returns An array of stored IoT data.
   */
  getStoredData(): IoTData[] {
    // Retrieve and return the stored data from the in-memory storage
    return inMemoryStorage.getData();
  }
}
