import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpriteBgDirective } from './spriteBg.attr.directive';

@NgModule({
  declarations: [
    AppComponent, SpriteBgDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
