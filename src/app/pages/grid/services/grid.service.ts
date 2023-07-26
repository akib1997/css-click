import { Injectable } from '@angular/core';
import { displayGridValues } from '@app/core/enums/grid/enum-grid';
import { convertToCSSProperty } from '@app/core/utilities/convertToCSSPropertiy';
import { IGrid } from '@app/models/grid/grid.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GridService {
  initialValues: IGrid = generateInitialValues(initialValuesArray);
  private gridValue = new BehaviorSubject(this.initialValues);
  gridValue$ = this.gridValue.asObservable();

  constructor() {}

  setFlexValue(data: any): void {
    const cssObj: any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const cssKey = convertToCSSProperty(key);
        cssObj[cssKey] = data[key];
      }
    }
    return this.gridValue.next(cssObj);
  }

}

function generateInitialValues(valuesArray: any[]): IGrid {
  return {
    display: valuesArray[0],
    gridTemplateColumns: [100, 100, 100],
    gridTemplateRows: [],
  };
}

const initialValuesArray = [
  displayGridValues[0],
  [100, 100, 100],
  [],
];
