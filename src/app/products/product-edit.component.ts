import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { NotificationService } from '../shared/service/notification.service';

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product edition';
  product: IProduct;

  constructor(private productService: ProductService,
              private notificationService: NotificationService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getProductById(id);
  }

  getProductById(id: number): void {
    this.productService.getProducts().subscribe(products => {
      this.product = products.find(product => product.id == id);
    });
  }

  updateProduct(): void {
    if (this.notificationService.confirmNotification()) {
      this.productService.updateProduct(this.product).subscribe();
      this.router.navigate(['/products']);
    }
  }
}
