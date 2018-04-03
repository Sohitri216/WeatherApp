import { Injectable } from '@angular/core';
import { Geo } from '../components/dashboard/geo';

@Injectable()
export class DatastorageService {
  dataObject: Geo;
  constructor() { }
  setData(data: Geo): void {
    console.log('in set data', data);
    this.dataObject = data;
    console.log('data set in service:', this.dataObject);
  }

  getData(): Geo {
    return this.dataObject;
  }
}
