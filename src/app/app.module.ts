import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './home/welcome.module';

@NgModule({
  // Which of our components belong to this module
  declarations: [  
    AppComponent 
  ], 
  /* External modules we want to have available to all of the components that 
  belong to this module*/
  imports: [ 
    BrowserModule, // BrowserModule must always be imported in root module!
    HttpClientModule,
    ProductsModule,
    SharedModule,
    WelcomeModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ], 
  // Startup component of the application
  bootstrap: [ AppComponent ]
})

export class AppModule { }
