import { Component, input, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { PaginationParams } from '../../models/pagination-params.model';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'products',
  standalone: false,
  templateUrl: 'product-list-page.component.html',
  styleUrls: ['product-list-page.component.scss'],
})
export class ProductListPageComponent {
  title = 'products-client';
  products: Product[] = [];
  paginationParams: PaginationParams = {
    pageIndex: 0,
    pageSize: 10,
  };
  total: number = 0;
  isLoading = false;
  errorKey: string | null = '';

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProducts();
  }
  onPageChange(event: PaginationParams): void {
    this.paginationParams.pageIndex = event.pageIndex;
    this.paginationParams.pageSize = event.pageSize;
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.errorKey = null;
    this.productService
      .getProducts(
        this.paginationParams.pageIndex,
        this.paginationParams.pageSize
      )
      .pipe(
        catchError((err) => {
          this.isLoading = false;
          if (err.status === 0) {
            this.errorKey = 'NO_CONNECTION';
          } else if (err.error) {
            this.errorKey = err.error;
          }
          return of(null);
        })
      )
      .subscribe((productsResponse) => {
        if (productsResponse) {
          this.products = productsResponse.products;
          this.total = productsResponse.total;
        }

        this.isLoading = false;
      });
  }
}
