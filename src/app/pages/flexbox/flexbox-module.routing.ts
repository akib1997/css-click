import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexboxComponent } from './flexbox/flexbox.component';

const routes: Routes = [
  {
    path: '',
    component: FlexboxComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FlexboxRouterModule{}
