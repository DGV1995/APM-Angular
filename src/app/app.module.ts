import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'

@NgModule({
  // Which of our components belong to this module
  declarations: [ AppComponent, ProductListComponent ], 
  /* External modules we want to have available to all of the components that 
  belong to this module*/
  imports: [ BrowserModule, FormsModule ], 
  // Startup component of the application
  bootstrap: [ AppComponent ] 
})

export class AppModule { }
