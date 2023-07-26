import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  boxes: IBox[] = [
    { title: 'Box 1', color: 'red', deletable: false },
    { title: 'Box 2', color: 'fuchsia', deletable: true },
    { title: 'Box 3', color: 'blue', deletable: false },
    { title: 'Box 4', color: 'sky', deletable: false },
  ];

  constructor() {}

  createBox() {
    const box = this.generateBox();
    this.boxes.push(box);
  }

  removeBox(box: IBox) {
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
    const colors = ['sky', 'indigo', 'violet', 'fuchsia', 'pink', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `${colors[randomIndex]}`;
  }
}

export interface IBox {
  title: string;
  color: string;
  deletable: boolean;
}
