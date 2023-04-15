import { Component, Inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { flag } from '../../data-type'
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  flag:undefined|flag[];
  randomObject:undefined|flag;
  temp:undefined|string;
  addMessage:undefined|string;
  
  constructor(private product:ProductsService,private route:Router){}

  addflag()
  {
    this.product.getflag().subscribe((data)=>{
      this.flag=data;
      this.randomObject = this.flag[Math.floor(Math.random() * this.flag.length)];
      })
  }
   myFunction() {
    alert("Oops!! Try again");
  }
 
  onSubmit(data:any)
  {
    
     this.temp=data.name;
      if(this.temp)
      {
        if(this.randomObject?.name.toLocaleLowerCase()===this.temp.toLocaleLowerCase())
        {
          this.addMessage="completed level 1 successfully";
          this.route.navigate(['secondPage']);
        }
        else{
          this.myFunction();
        }
      }
      setTimeout(()=>{
        this.addMessage='';
      },3000);
  }
  ngOnInit()
  {
   this.addflag();
  }
}