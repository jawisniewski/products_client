import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { catchError, of } from 'rxjs';
import { LoaderComponent } from '../../../../../shared/components/loader/loader.component';
import { ApiAlertComponent } from '../../../../../shared/components/api-alert/api-alert.component';
import { ProductFormComponent } from '../../../components/product-form/product-form.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'product-create-page',
    templateUrl: './product-create-page.component.html',
    styleUrl: './product-create-page.component.scss',
    imports: [
        LoaderComponent,
        ApiAlertComponent,
        ProductFormComponent,
        TranslatePipe,
    ],
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
          } else if (err.errorCode) {
            this.errorKey = err.errorCode;
          } else {
            this.errorKey = 'UNKNOWN_ERROR';
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
