import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsGuard } from './product-details.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    // We import SharedModule to use common components and modules
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailsGuard], component: ProductDetailsComponent }
    ])
  ]
})
export class ProductsModule { }
