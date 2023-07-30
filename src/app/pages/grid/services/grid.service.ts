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

  updateGridValue(data: any): void {
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
    gridTemplateColumns: valuesArray[1],
    gridTemplateRows: valuesArray[2],
  };
}

const initialValuesArray = [displayGridValues[0], [150, 100, 50, 160], [1, 1]];
