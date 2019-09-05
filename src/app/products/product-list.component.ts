import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    constructor(private productService: ProductService) {}

    pageTitle: string = 'Product List';
    imageWidth: number = 40;
    imageMargin: number = 2;
    imageIsShown: boolean = false;
    listFilter: string;
    products: IProduct[];

    ngOnInit(): void {
        this.listProducts();
    }

    listProducts(): void {
        this.products = this.productService.getProducts();
    }

    // Set whether the image is shown or not
    toggleImage(): void {
        this.imageIsShown = !this.imageIsShown;
    }

    filter(): void {
        if (!this.listFilter.trim()) {
            this.listProducts();
        }
        
        let filterBy: string = this.listFilter.toLowerCase();
        this.products = this.products.filter(product => product.productName.toLowerCase().includes(filterBy));
    }
}

