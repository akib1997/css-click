import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridRouterModule } from './grid-module.routing';
import { GridFormComponent } from './components/grid-form/grid-form.component';
import { GridItemBoxComponent } from './components/grid-item-box/grid-item-box.component';
import { GridOutputComponent } from './components/grid-output/grid-output.component';
import { GridItemFormComponent } from './components/grid-item-form/grid-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { TooltipComponent } from '@app/shared/components/tooltip/tooltip.component';
import { SharedModule } from '@app/shared/shared.module';
import { GridService } from './services/grid.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule,
    GridRouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    TooltipComponent,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [GridComponent,GridFormComponent, GridItemBoxComponent, GridOutputComponent, GridItemFormComponent],
  providers: [GridService]
})
export class GridModule { }
