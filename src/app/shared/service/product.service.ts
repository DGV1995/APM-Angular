import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../../products/product';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
    })
 };

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {}
    productUrl: string = 'http://localhost:3000/products';

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl);
    }

    updateProduct(product: IProduct): Observable<IProduct> {
        let url = this.productUrl + '/' + product.id
        return this.http.put<IProduct>(url, product, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    saveProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(this.productUrl, product, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    deleteProduct(product: IProduct): Observable<IProduct> {
        return this.http.delete<IProduct>(this.productUrl + '/' + product.id);
    }
    
    // Function to execute if there is any error retrieving the data from the web server
    private handleError(error: HttpErrorResponse) {
        alert(error.message);
        return throwError(error);
    }
}