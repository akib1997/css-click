import { Injectable } from '@angular/core';
import { IFlexItem } from '@app/pages/flexbox/flex-item-form/flex-item-form.component';
import { BehaviorSubject } from 'rxjs';
import { convertToCSSProperty } from '../utilities/convertToCSSPropertiy';
import { IFlexItemBox } from '@app/models/flex.model';

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

  boxes: IFlexItemBox[] = [
    { title: 'Box 1', color: 'red', deletable: false },
    { title: 'Box 2', color: 'fuchsia', deletable: true },
    { title: 'Box 3', color: 'blue', deletable: false },
    { title: 'Box 4', color: 'sky', deletable: false },
  ];

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


  createBox() {
    const box = this.generateBox();
    this.boxes.push(box);
  }

  removeBox(box: IFlexItemBox) {
    const index = this.boxes.indexOf(box);
    if (index !== -1) {
      this.boxes.splice(index, 1);
    }
  }

  generateBox() {
    const title = `Box ${this.boxes.length + 1}`;
    const color = this.getRandomColor();
    const deletable = Math.random() < 0.5;

    return { title, color, deletable };
  }

  private getRandomColor() {
    const colors = ['Sky', 'Indigo', 'Violet', 'Fuchsia', 'Pink', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `${colors[randomIndex]}`;
  }
}


