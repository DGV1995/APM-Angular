import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConvertToSpacesPipe } from './pipe/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';


/*
In this module we declare all the components and modules that are common in all the components.
Then we have declared them (declarations and imports) we have to export them (exports) to use them
in other modules.
*/
@NgModule({
  declarations: [
    StarComponent,
    PageNotFoundComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StarComponent,
    PageNotFoundComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
