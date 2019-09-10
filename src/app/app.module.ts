import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // Which of our components belong to this module
  declarations: [ AppComponent ], 
  /* External modules we want to have available to all of the components that 
  belong to this module*/
  imports: [ AppRoutingModule ],
  // Startup component of the application
  bootstrap: [ AppComponent ]
})

export class AppModule { }
