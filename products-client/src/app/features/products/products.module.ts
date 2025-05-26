import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListPageComponent } from './pages/product-list/product-list-page.component';
import { ProductCreatePageComponent } from './pages/product-create/product-create-page/product-create-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    TranslateModule,
    MatButtonModule,
    ProductListComponent,
    ProductListPageComponent,
    ProductCreatePageComponent,
    ProductFormComponent,
],
})
export class ProductsModule {}
