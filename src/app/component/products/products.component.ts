import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService,private router: Router) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category =="mobiles"){
          a.category ="Mobiles"
        }
        if(a.category =="laptops"){
          a.category ="Laptops"
        }
        if(a.category =="headset"){
          a.category ="Headset"
        }
        if(a.category =="Fridge"){
          a.category ="fridge"
        }
        if(a.category =="AC"){
          a.category ="ac"
        }
        if(a.category =="TV"){
          a.category ="tv"
        }
        if(a.category =="Airpods"){
          a.category ="airpods"
        }
        if(a.category =="W.Machine"){
          a.category ="w.machine"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){

   

     this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  rizwan(item:any)
  {
    console.log(32, item)
  
    this.router.navigate(['/product-info']);
    localStorage.setItem("sts","1")
    //this.router.navigate(['/login', { sts: 1 }]);
    this.router.navigate(['/login'], { state: { sts: item } });

    console.log(63, this.router.navigate(['/login'], { state: { sts: item  } }) );
    

  }
  }

