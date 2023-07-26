import { Component, Input, OnInit } from '@angular/core';
import { boxAnimation } from '@app/utils/animations';
import { BoxService, IBox } from '@app/core/services/box.service';

@Component({
  selector: 'flex-item-box',
  templateUrl: './flex-item-box.component.html',
  styleUrls: ['./flex-item-box.component.scss'],
  animations: [
    boxAnimation
  ]
})
export class FlexItemBoxComponent implements OnInit {
  @Input({required: true}) box: IBox;
  @Input() deletable: boolean = true;

  constructor(private boxService: BoxService) {}

  ngOnInit() {
  }

  onDeleteClick($event: any): void {
    this.boxService.removeBox($event);
  }
}
