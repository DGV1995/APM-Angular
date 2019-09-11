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
  id: number;
  product: IProduct;

  constructor(private productService: ProductService,
              private notificationService: NotificationService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProducts().subscribe(products => {
      this.product = products.find(product => product.id == this.id);
    });
  }

  updateProduct(): void {
    if (this.notificationService.confirmNotification()) {
      this.productService.updateProduct(this.product).subscribe();
      this.router.navigate(['/products']);
    }
  }
}
