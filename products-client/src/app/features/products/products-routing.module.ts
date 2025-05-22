import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListPageComponent } from "./pages/product-list/product-list-page.component";
import { ProductCreatePageComponent } from "./pages/product-create/product-create-page/product-create-page.component";

const routes: Routes = [
  { path: '', component: ProductListPageComponent },
  { path: 'new', component: ProductCreatePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}