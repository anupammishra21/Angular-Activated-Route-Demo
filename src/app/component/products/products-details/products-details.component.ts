import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/servicenew.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  product: any | undefined;
  productID!: string | null;
  prodnew_id!: any;
  productList: any;
  productListBackUp: any;

  constructor(
    private usersr: ProductService,
    private usersr2: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usersr2.paramMap.subscribe((params) => {
      this.productID = params.get('id');
      this.productList = this.usersr.getProductName(this.productID)?.prod_sub;
      this.productListBackUp = this.productList;
    });
  }

  // isValid: boolean = false;

  onSearchTextEntered(searchValue: string) {
    if (searchValue) {
      this.productList = this.productListBackUp.filter((data: any) => {
        return data.comp_model.toLowerCase().includes(searchValue);
      });
    } else {
      this.productList = this.productListBackUp;
    }
  }
}
