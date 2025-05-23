import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsResponse } from '../models/products-response.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {}

  getProducts(
    pageIndex: number,
    pageSize: number
  ): Observable<ProductsResponse> {
    const params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<ProductsResponse>(`${this.apiUrl}/getList`, {
      params,
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.apiUrl}/Create`, product);
  }
}
