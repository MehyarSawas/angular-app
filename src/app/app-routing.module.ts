import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RenderDynamicComponent} from '../render/render-dynamic/render-dynamic.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
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
