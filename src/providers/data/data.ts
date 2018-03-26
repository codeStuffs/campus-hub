
export abstract class DataProvider {
  abstract init(): Promise<boolean>;

  abstract getNews(): Promise<any[]>;
  abstract getEvents(): Promise<any[]>;
  abstract getBuildings(schl):any;
}
