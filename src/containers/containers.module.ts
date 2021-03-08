import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitContainerComponent} from './split-container/split-container.component';
import {ContainersRendererComponent} from './containers-renderer/containers-renderer.component';

@NgModule({
  declarations: [
    SplitContainerComponent,
    ContainersRendererComponent,
  ],
  exports: [
    SplitContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContainersModule {
}
