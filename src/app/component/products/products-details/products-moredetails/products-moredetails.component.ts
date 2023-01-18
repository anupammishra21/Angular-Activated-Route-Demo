import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/servicenew.service';

@Component({
  selector: 'app-products-moredetails',
  templateUrl: './products-moredetails.component.html',
  styleUrls: ['./products-moredetails.component.css'],
})
export class ProductsMoredetailsComponent implements OnInit {
  sub_product!: any;
  singel_product!: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      const productId = params.get('id');
      const subProductId = params.get('pid');

      this.sub_product = this.productService.getSingleSubProduct(productId);

      this.singel_product = this.productService.getSubProductDetails(
        this.sub_product,
        subProductId
      );
    });
  }
}
