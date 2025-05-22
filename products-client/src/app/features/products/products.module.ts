import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListPageComponent } from './pages/product-list/product-list-page.component';
import { ProductCreatePageComponent } from './pages/product-create/product-create-page/product-create-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductListPageComponent,
    ProductCreatePageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    ProductFormComponent,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class ProductsModule {}
