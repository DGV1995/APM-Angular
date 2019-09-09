import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  id: number;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private productService: ProductService) {}

  ngOnInit(): void {
    // '+' symbol turns the parameter id into an integer
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProducts().subscribe(products => {
      /*
      To get only one product, we have to use 'find()' method
      'filter()' method returns an array of IProduct
      */ 
      this.product = products.find(product => product.productId == this.id);
    })
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
