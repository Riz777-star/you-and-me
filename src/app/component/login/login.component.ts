import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  


  constructor(private router: Router) { }
  login(){
    console.log(32, "hello world")
    console.log(history.state.sts); // GET DATA


     //if(history.state.sts=="1"){
     
      //this.router.navigate(['/products-info']);
      this.router.navigate(['/product-info'],{ state: { sts:history.state.sts } });
      // , 
       
     //}
  }

  ngOnInit(): void {
  }

}
