import { Injectable } from '@angular/core';

@Injectable()
export class TableConfigService {

  constructor() { }

  public getConfig() {
    return {
      rows: 100,
      cols: 50
    }
  }

}
