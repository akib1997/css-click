import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FlexboxRouterModule } from './flexbox-module.routing';
import { FlexFormComponent } from '@app/pages/flexbox/flex-form/flex-form.component';
import { FlexItemBoxComponent } from './flex-item-box/flex-item-box.component';
import { FlexOutputComponent } from './flex-output/flex-output.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import { TooltipComponent } from '@app/shared/components/tooltip/tooltip.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexItemFormComponent } from './flex-item-form/flex-item-form.component';

@NgModule({
  imports: [
    CommonModule,
    FlexboxRouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    TooltipComponent,
    MatExpansionModule,
  ],
  declarations: [FlexboxComponent, FlexFormComponent, FlexItemBoxComponent, FlexOutputComponent, FlexItemFormComponent]
})
export class FlexboxModule { }
