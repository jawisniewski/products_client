import { Component, Input } from "@angular/core";
import { Product } from "../../models/product.model";
import { CurrencyPipe } from "@angular/common";
@Component({
  selector: 'product-item',
  standalone: false,
  templateUrl: 'product-item.component.html',
  styleUrls: ['product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product!: Product;
} 