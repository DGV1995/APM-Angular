import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../products/product';
import { products } from '../../../api/products/products';

export class ProductService {
    getProducts(): IProduct[] {
        return products;
    }
}