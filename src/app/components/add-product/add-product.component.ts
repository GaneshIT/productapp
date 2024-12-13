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
  updateBtn:boolean=false;
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
  showMsg:boolean=false;
  ngOnInit(){
    this.getAll();
  }
  addProduct(){
    //this.productlist.push({"name":this.name,"type":this.type,"price":this.price});
    this.productService.addProduct(this.productData).subscribe({
      next:(response)=>{
        console.log(response);
        this.showMsg=true;
        setTimeout(()=>{
          this.showMsg=false;
        },5000)
        this.getAll();
        this.resetProuct();

      },
      error:(err)=>{
        console.log(err);
        alert(err);
      }
    })
  }
  displayProduct(e:any){
    this.productData=e;
    this.productData.producttype=e.productType;
    this.updateBtn=true;
  }
  resetProuct(){
    this.name='';
    this.type='';
    this.price=0;
    this.updateBtn=false;

  }
  updateProduct(){
    this.productService.updateProduct(this.productData,this.productData.id).subscribe(
      {
        next:(response)=>{
          this.updateBtn=false;
          this.getAll();
          this.resetProuct();
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
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
