import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridRouterModule } from './grid-module.routing';
import { GridFormComponent } from './grid-form/grid-form.component';
import { GridItemBoxComponent } from './grid-item-box/grid-item-box.component';
import { GridOutputComponent } from './grid-output/grid-output.component';
import { GridItemFormComponent } from './grid-item-form/grid-item-form.component';

@NgModule({
  imports: [
    CommonModule,
    GridRouterModule
  ],
  declarations: [GridComponent, GridFormComponent, GridItemBoxComponent, GridOutputComponent, GridItemFormComponent]
})
export class GridModule { }
