import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
//import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  //router: any;
  constructor(private cartService : CartService,
  //  private router: Router, 
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
//add new code for login page just for example


// loginpage(){
//   console.log(32, "hello world")

//   this.router.navigate(['/products']);
// }
}
