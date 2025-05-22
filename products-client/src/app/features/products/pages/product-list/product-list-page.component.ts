import { Component, input, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { PaginationParams } from '../../models/pagination-params.model';
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
    this.productService
      .getProducts(
        this.paginationParams.pageIndex,
        this.paginationParams.pageSize
      )
      .subscribe((productsResponse) => {
        this.products = productsResponse.products;
        this.total = productsResponse.total;
      });
  }
}
