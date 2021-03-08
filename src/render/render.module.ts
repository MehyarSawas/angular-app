import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentHostDirective} from './component-host.directive';
import { RenderDynamicComponent } from './render-dynamic/render-dynamic.component';



@NgModule({
  declarations: [
    ComponentHostDirective,
    RenderDynamicComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentHostDirective,
    RenderDynamicComponent
  ]
})
export class RenderModule { }
