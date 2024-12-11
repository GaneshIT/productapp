import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private productService:ProductService){
  }
  acno:number=12;
  productData:Product={
    id:0,
    name:'',
    description:'',
    producttype:'',
    price:0
  }
  name:string='';
  type:string='';
  price:number=0;
  productlist:any=[];

  ngOnInit(){
    this.getAll();
  }
  addProduct(){
    //this.productlist.push({"name":this.name,"type":this.type,"price":this.price});
    this.productService.addProduct(this.productData).subscribe({
      next:(response)=>{
        console.log(response);
        alert(response.result);
        this.getAll();
      },
      error:(err)=>{
        console.log(err);
        alert(err);
      }
    })
  }
  resetProuct(){
    this.name='';
    this.type='';
    this.price=0;
  }
  getAll(){
    this.productService.getAll().subscribe(
      {
        next:(response:any)=>{
          this.productlist=response.result;
        },
      error:(err:any)=>{
        console.log(err);
      }
      })
  }
}
