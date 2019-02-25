import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpriteComponent } from './sprite.component';
import { MainComponent } from "./main.component";

@NgModule({
  declarations: [
    MainComponent, SpriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
