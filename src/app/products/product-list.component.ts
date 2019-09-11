import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { IProduct } from './product';
import { NotificationService } from '../shared/service/notification.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    // Inject the service in the constructor
    constructor(private productService: ProductService,
                private notificationService: NotificationService) {}

    pageTitle: string = 'Product List';
    imageWidth: number = 30;
    imageMargin: number = 2;
    imageIsShown: boolean = true;
    listFilter: string;
    products: IProduct[];
    listSearch: string;
    categoryFilter: string;

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

    listProductsByCategory(): void {
        if (this.categoryFilter == '') {
            this.listProducts();
        } else {
            this.findByCategory();
        }
    }

    findByCategory(): void {
        this.productService.getProducts().subscribe(data => {
            this.products = data.filter(product => product.productCategory == this.categoryFilter);
        })
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

    deleteProduct(product: IProduct) {
        if(this.notificationService.confirmNotification()) {
            this.productService.deleteProduct(product).subscribe();
        }
    }

    // Use the string received from the nested component (StarComponent)
    onRatingClicked(message: string): void {
        this.notificationService.alertMessage(message);
    }
}

