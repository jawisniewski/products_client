import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Product } from '../../models/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { PaginationParams } from '../../models/pagination-params.model';
@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products!: Product[];
  @Input() paginationParams!: PaginationParams;
  @Input() total!: number;
  @Output() pageChanged = new EventEmitter<PaginationParams>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'code', 'price'];

  trackbyFn(index: number, product: Product): number {
    return index;
  }
  onPageChange(event: PaginationParams): void {
    this.pageChanged.emit(event);
  }
}
