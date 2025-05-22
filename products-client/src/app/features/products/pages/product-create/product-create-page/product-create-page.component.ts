import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { catchError, of } from 'rxjs';

@Component({
  standalone: false,
  selector: 'product-create-page',
  templateUrl: './product-create-page.component.html',
  styleUrl: './product-create-page.component.scss',
})
export class ProductCreatePageComponent {
  constructor(private productService: ProductService, private router: Router) {}
  errorKey: string | null = null;
  pageSize = 10;
  pageIndex = 0;
  isLoading = false;

  ngOnInit(): void {}

  onSaveProduct(product: Product) {
    this.isLoading = true;
    this.errorKey = null;
    this.productService
      .createProduct(product)
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
      .subscribe((result) => {
        this.isLoading = false;
        if (result) {
          this.router.navigate(['/products']);
        }
      });
  }
  NavigateToProducts(): void {}
}
