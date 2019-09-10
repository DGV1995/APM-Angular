import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    // Inject the service in the constructor
    constructor(private productService: ProductService) {}

    pageTitle: string = 'Product List';
    imageWidth: number = 30;
    imageMargin: number = 2;
    imageIsShown: boolean = true;
    listFilter: string;
    products: IProduct[];
    listSearch: string;

    ngOnInit(): void {
        this.listProducts();
    }

    listProducts(): void {
        // Subscribe is a method that notifies when the data is received
        this.productService.getProducts().subscribe({
            next: data => this.products = data,
            error: err => alert(err) // manage if there is an error
        });
    }

    // Set whether the image is shown or not
    toggleImage(): void {
        this.imageIsShown = !this.imageIsShown;
    }

    // Filter the products by name
    filter(): void {
        if (!this.listFilter.trim()) {
            this.listProducts();
            return;
        }
        
        let filterBy: string = this.listFilter.toLowerCase();
        this.products = this.products.filter(product => product.productName.toLowerCase().includes(filterBy));
    }

    // Use the string received from the nested component (StarComponent)
    onRatingClicked(message: string): void {
        alert(message);
    }
}

