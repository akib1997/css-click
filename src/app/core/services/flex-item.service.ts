import { Injectable } from '@angular/core';
import { IFlexItem } from '@app/pages/flexbox/flex-item-form/flex-item-form.component';
import { BehaviorSubject } from 'rxjs';
import { convertToCSSProperty } from '../utilities/convertToCSSPropertiy';


@Injectable({
  providedIn: 'root',
})
export class FlexItemService {
  initialData: IFlexItem = {
    order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 100,
    flex: [0, 1, 200],
    alignSelf: 'auto',
  }
  private dataSource = new BehaviorSubject<IFlexItem>({
    order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 100,
    flex: [0, 1, 200],
    alignSelf: 'auto',
  });

  flexItemData = this.dataSource.asObservable();

  constructor(){}

  updateFlexItemData(data: any) {
    const cssObj: any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const cssKey = convertToCSSProperty(key);
        cssObj[cssKey] = data[key];
      }
    }
    this.dataSource.next(data)
  }
}


