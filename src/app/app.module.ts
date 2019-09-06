import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ConvertToSpacesPipe } from './shared/pipe/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  // Which of our components belong to this module
  declarations: [ 
    AppComponent, 
    ProductListComponent, 
    ConvertToSpacesPipe, 
    StarComponent 
  ], 
  /* External modules we want to have available to all of the components that 
  belong to this module*/
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ], 
  // Startup component of the application
  bootstrap: [ AppComponent ],
})

export class AppModule { }
