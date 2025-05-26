import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { PaginationParams } from '../../models/pagination-params.model';
import { MatAnchor } from '@angular/material/button';
import {
  MatTable,
  MatColumnDef,
  MatHeaderCellDef,
  MatHeaderCell,
  MatCellDef,
  MatCell,
  MatHeaderRowDef,
  MatHeaderRow,
  MatRowDef,
  MatRow,
} from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
  imports: [
    MatAnchor,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatPaginator,
    CurrencyPipe,
    TranslatePipe,
  ],
})
export class ProductListComponent {
  @Input() products!: ProductModel[];
  @Input() paginationParams!: PaginationParams;
  @Input() total!: number;
  @Output() pageChanged = new EventEmitter<PaginationParams>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'code', 'price'];

  trackbyFn(index: number, product: ProductModel): number {
    return index;
  }
  onPageChange(event: PaginationParams): void {
    this.pageChanged.emit(event);
  }
}
