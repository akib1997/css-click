import { Component, Input, OnInit } from '@angular/core';
import { BoxService, IBox } from '@app/core/services/box.service';

@Component({
  selector: 'grid-item-box',
  templateUrl: './grid-item-box.component.html',
  styleUrls: ['./grid-item-box.component.scss']
})
export class GridItemBoxComponent implements OnInit {
  @Input({required: true}) box: IBox;
  @Input() deletable: boolean = true;


  constructor(private boxService: BoxService) {}

  ngOnInit() {
    // console.log(this.box, 'box')
  }

  onDeleteClick($event: any): void {
    this.boxService.removeBox($event);
  }

}
