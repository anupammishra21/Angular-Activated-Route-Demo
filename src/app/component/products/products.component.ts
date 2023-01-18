import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/servicenew.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  user:any=[];


  constructor(private userser:ProductService) { }

  ngOnInit(): void {
    this.user=this.userser.products
    console.log(this.user);
    
  }

}
