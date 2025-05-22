import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  standalone: false,
  selector: 'product-create-page',
  templateUrl: './product-create-page.component.html',
  styleUrl: './product-create-page.component.scss',
})
export class ProductCreatePageComponent {
  constructor(private productService: ProductService, private router: Router) {}

  pageSize = 10;
  pageIndex = 0;

  ngOnInit(): void {}

  onSaveProduct(product: Product) {
    this.productService.createProduct(product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
  NavigateToProducts(): void {}
}
