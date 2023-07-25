import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flexbox',
    loadChildren: () => import('./pages/flexbox/flexbox.module').then(m => m.FlexboxModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then(m => m.GridModule)
  },
  {
    path: '**',
    redirectTo: 'flexbox'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
