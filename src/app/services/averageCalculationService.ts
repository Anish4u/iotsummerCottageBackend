// Import the IoTData model
import { IoTData } from "../models/dataModel";

// Import the in-memory storage module
import { inMemoryStorage } from "../../data/inMemoryStorage";

// Service class to handle the calculation of average values
export class AverageCalculationService {
  /**
   * Calculates the average temperature and humidity values from the provided IoT data.
   * @param storedData - An array of IoT data for which to calculate averages.
   * @returns An object containing the calculated average temperature and humidity.
   */
  calculateAverageValues(storedData: IoTData[]): {
    averageTemperature: number;
    averageHumidity: number;
  } {
    // Check if there is any stored data
    if (storedData.length === 0) {
      return { averageTemperature: 0, averageHumidity: 0 };
    }

    // Calculate the total sum of temperature and humidity
    const totalTemperature = storedData.reduce(
      (sum, data) => sum + data.temperature,
      0
    );
    const totalHumidity = storedData.reduce(
      (sum, data) => sum + data.humidity,
      0
    );

    // Calculate the average, rounding up to the nearest integer
    const averageTemperature = Math.ceil(totalTemperature / storedData.length);
    const averageHumidity = Math.ceil(totalHumidity / storedData.length);

    // Return the calculated averages
    return { averageTemperature, averageHumidity };
  }
}
