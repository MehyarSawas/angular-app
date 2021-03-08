import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppWrapperComponent} from './app-wrapper/app-wrapper.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RenderModule} from '../render/render.module';

@NgModule({
  declarations: [
    AppWrapperComponent,
    AppHeaderComponent,
    AppBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    RenderModule
  ],
  providers: [],
  bootstrap: [
    AppWrapperComponent
  ],
  exports: [
    MatButtonModule,
  ]
})
export class AppModule { }
