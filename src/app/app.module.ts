import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ProductService } from './shared/service/product.service';
import { ConvertToSpacesPipe } from './shared/pipe/convert-to-spaces.pipe';

@NgModule({
  // Which of our components belong to this module
  declarations: [ AppComponent, ProductListComponent, ConvertToSpacesPipe ], 
  /* External modules we want to have available to all of the components that 
  belong to this module*/
  imports: [ BrowserModule, FormsModule ], 
  // Startup component of the application
  bootstrap: [ AppComponent ],
  providers: [ ProductService ]
})

export class AppModule { }
