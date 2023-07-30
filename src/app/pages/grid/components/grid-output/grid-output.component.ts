import { Component, OnInit } from '@angular/core';
import { BoxService, IBox } from '@app/core/services/box.service';
import { boxAnimation } from '@app/utils/animations';
import { GridService } from '../../services/grid.service';
import { convertToCSSProperty } from '@app/core/utilities/convertToCSSPropertiy';

@Component({
  selector: 'app-grid-output',
  templateUrl: './grid-output.component.html',
  styleUrls: ['./grid-output.component.scss'],
  animations: [boxAnimation],
})
export class GridOutputComponent implements OnInit {
  boxes: IBox[];
  loadGirdContainerCSS: any;
  gridTemplateColumnStyels: number[];
  constructor(
    private boxService: BoxService,
    private gridService: GridService
  ) {}

  ngOnInit() {
    this.boxes = this.boxService.boxes;
    this.gridService.gridValue$.subscribe((gridcss: any) => {
      this.loadGirdContainerCSS = gridcss;
      if (!this.gridTemplateColumnStyels) {
        this.gridTemplateColumnStyels = gridcss?.gridTemplateColumns;
      } else {
        let arr = gridcss?.['grid-template-columns'];
        this.gridTemplateColumnStyels = arr;
      }

      // this.getColumnWidths()
      this.updateGrid()

      // console.log('loadGirdContainerCSS', gridcss);
      // console.log('gridTemplateColumnStyels', this.gridTemplateColumnStyels);
    });
  }

  private updateGrid() {
    const gridContainer = document.querySelector('.grid-container') as HTMLElement;
    gridContainer.style.gridTemplateColumns = this.getColumnWidths();
    gridContainer.style.display = 'grid';
    console.log('gridContainer', gridContainer.style.gridTemplateColumns);

  }

  getColumnWidths(): string {
    console.log(this.gridTemplateColumnStyels, 'this.gridTemplateColumnStyels')
    return this.gridTemplateColumnStyels?.map((width) => `${width}px`).join(' ');
  }

  createBox(): void {
    this.boxService.createBox();
  }


  removeBox(box: IBox): void {
    this.boxService.removeBox(box);
  }
}
