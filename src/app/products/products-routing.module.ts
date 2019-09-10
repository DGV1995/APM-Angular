import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit.component';

const routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'add', component: ProductFormComponent },
  { path: 'edit/:id', component: ProductEditComponent }
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    ProductEditComponent
  ],
  imports: [
    SharedModule,  // Import SharedModule to use common components and modules
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
