import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../products/product';
import { products } from '../../../api/products/products';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    //constructor(private http: HttpClient) {}

    productUrl: string = 'http://localhost:3000/products';

    getProducts(): IProduct[] {
        return products;
    }

    /*
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl);
    }
    */
}