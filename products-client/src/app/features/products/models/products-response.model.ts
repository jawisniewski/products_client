import { Product } from './product.model';

export interface ProductsResponse {
  products: Product[];
  total: number;
}
