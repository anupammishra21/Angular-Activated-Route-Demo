import { Injectable } from '@angular/core';
import { allProductDetails } from '../constants/product-details.constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = allProductDetails;

  constructor() {}

  getProductName(id: string | null) {
    return this.products.find((data) => data.prod_id == id);
  }

  getSingleSubProduct(productId: string | null) {
    return this.products.find((data: any) => data.prod_id == productId);
  }

  getSubProductDetails(subProduct: any | null, subProductId: string | null) {
    return subProduct.prod_sub.find(
      (data: any) => data.comp_id == subProductId
    );
  }
}
