import { ProductModel } from './product.model';

export interface ProductsResponse {
  products: ProductModel[];
  total: number;
}
