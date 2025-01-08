import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  name: any;
  n1: any;
  product_image: any;
  product_item: any;
  product_des: any;
  product_price: any;

  constructor() { }

  ngOnInit(): void {
    console.log(history.state.sts)

    this.name = history.state.sts
    console.log(16,this.name)
    this.product_image = this.name.image
    this.product_item = this.name.title
    this.product_des = this.name.description
   this.product_price = this.name.price;


    
  }

}
