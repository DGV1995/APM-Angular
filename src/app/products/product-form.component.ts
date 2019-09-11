import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { IProduct } from './product';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/service/notification.service';

@Component({
  selector: 'pm-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productName: string;
  productCode: string;
  category: string;
  description: string;
  releaseDate: string;
  price: number;
  rating: number;
  imgUrl: string;

  title: string = 'New product creation';
  product: IProduct;

  constructor(private productService: ProductService, 
              private notificationService: NotificationService,
              private router: Router) { }

  ngOnInit() {
  }

  saveProduct(): void {
    this.product = {
      id: null,
      productName: this.productName,
      productCode: this.productCode,
      productCategory: this.category,
      description: this.description,
      releaseDate: this.releaseDate,
      price: this.price,
      starRating: this.rating,
      imageUrl: this.imgUrl
    }

    if (this.notificationService.confirmNotification()) {
      this.productService.saveProduct(this.product).subscribe();
      this.router.navigate(['/products']);
    }
  }
}
