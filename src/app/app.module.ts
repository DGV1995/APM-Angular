import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ], // Which of our components belong to this module
  imports: [ BrowserModule ], // External modules we want to have available to all of the components that belong to this module
  bootstrap: [ AppComponent ] // Startup component of the application
})

export class AppModule { }
