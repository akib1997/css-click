import { Component, OnInit } from '@angular/core';
import { BoxService, IBox } from '@app/core/services/box.service';
import { boxAnimation } from '@app/utils/animations';
import { GridService } from '../../services/grid.service';

@Component({
  selector: 'app-grid-output',
  templateUrl: './grid-output.component.html',
  styleUrls: ['./grid-output.component.scss'],
  animations: [boxAnimation]
})
export class GridOutputComponent implements OnInit {
  boxes: IBox[];
  loadGirdContainerCSS: any;
  constructor(
    private boxService: BoxService,
    private gridService: GridService
  ) { }

  ngOnInit() {
    this.boxes = this.boxService.boxes;
    this.gridService.gridValue$.subscribe(gridcss => {
      console.log(gridcss, 'f')
      this.loadGirdContainerCSS = gridcss
    })
  }

  createBox(): void {
    this.boxService.createBox();
  }

  removeBox(box: IBox): void {
    this.boxService.removeBox(box);
  }

}
