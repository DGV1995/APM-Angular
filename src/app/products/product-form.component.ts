import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { IProduct } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  name: string;
  code: string;
  description: string;
  releaseDate: string;
  price: number;
  rating: number;
  imgUrl: string;

  title: string = 'New product creation';
  product: IProduct;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  saveProduct(): void {
    this.product = {
      id: null,
      productName: this.name,
      productCode: this.code,
      description: this.description,
      releaseDate: this.releaseDate,
      price: this.price,
      starRating: this.rating,
      imageUrl: this.imgUrl
    }

    this.productService.saveProduct(this.product).subscribe(product => alert(product.productName + ' created'));
    this.router.navigate(['/products']);
  }
}
