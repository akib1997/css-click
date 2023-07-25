import { Injectable } from '@angular/core';
import { displayGridValues } from '@app/core/enums/grid/enum-grid';
import { IGrid } from '@app/models/grid/grid.model';

@Injectable()
export class GridService {
  initialValues: IGrid = generateInitialValues(initialValuesArray);

  constructor() {}


}

function generateInitialValues(valuesArray: any[]): IGrid {
  return {
    display: valuesArray[0],
    // gridTemplateColumns: [100, 100, 100],
    // gridTemplateRows: [],
  };
}

const initialValuesArray = [
  displayGridValues[0],
  [100, 100, 100],
  [],
];
