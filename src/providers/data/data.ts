
export abstract class DataProvider {
  abstract init(): Promise<boolean>;

  abstract getNews(): Promise<any[]>;
  abstract getEvents(): Promise<any[]>;
  abstract getBuilding(buildingType: string): Promise<any[]>;
}
