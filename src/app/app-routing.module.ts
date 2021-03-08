import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RenderDynamicComponent} from '../render/render-dynamic/render-dynamic.component';

const routes: Routes = [
  {
    path: ':module/:component',
    component: RenderDynamicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
