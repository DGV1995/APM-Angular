import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../../products/product';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {}
    productUrl: string = 'http://localhost:3000/products';

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    
    // Function to execute if there is any error retrieving the data from the web server
    private handleError(error: HttpErrorResponse) {
        alert(error.message);
        return throwError(error);
        //console.log(error.message);
    }
}