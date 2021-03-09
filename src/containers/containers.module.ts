import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitContainerComponent} from './split-container/split-container.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SplitContainerComponent,
  ],
  exports: [
    SplitContainerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ContainersModule {
}
