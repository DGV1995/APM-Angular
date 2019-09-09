import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ConvertToSpacesPipe } from './shared/pipe/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  // Which of our components belong to this module
  declarations: [ 
    AppComponent, 
    ProductListComponent, 
    ConvertToSpacesPipe, 
    StarComponent, 
    ProductDetailsComponent,
    WelcomeComponent,
    PageNotFoundComponent 
  ], 
  /* External modules we want to have available to all of the components that 
  belong to this module*/
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ], 
  // Startup component of the application
  bootstrap: [ AppComponent ],
})

export class AppModule { }
