// // src/app/services/dataService.test.ts
import { DataService } from "./dataService";

describe("DataService", () => {
  let dataService: DataService;

  beforeEach(() => {
    dataService = new DataService();
  });

  it("should process data and store it", () => {
    const testData = { temperature: 25, humidity: 40, timestamp: Date.now() };
    dataService.processData(testData);

    const storedData = dataService.getStoredData();

    expect(storedData).toHaveLength(1);
    expect(storedData[0]).toEqual(testData);
  });
});
