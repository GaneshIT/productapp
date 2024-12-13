import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  @ViewChild('deleteButton') deleteButton: any;

@Input() productlistdata:any; //receiving input from parent component
@Output() productItemEmitter:EventEmitter<Product>=new EventEmitter<Product>();
@Output() productlistdataChange=new EventEmitter();
productId:number=0;
showMsg:boolean=false;
constructor(private productService:ProductService){}
ngOnChanges() {
  // create header using child_id
}
editProduct(id:any){
  this.productService.getById(id).subscribe({
    next:(response)=>{
        //response.result.id, 
        //response.result.name,
        //result response.result,
        //desc, response.price
        //emit()
        this.productItemEmitter.emit(response);
    },
    error:(err)=>{

    }
  });
}
confirmTodeleteProduct(id:any){
 this.productId=id;
}
deleteProduct(){
  if(this.productId!=0)
  this.productService.deleteProduct(this.productId).subscribe({
    next:(response)=>{
      this.productId=0;
      this.deleteButton.nativeElement.click();
        this.getAll();
      this.showMsg=true;
      setTimeout(()=>{
        this.showMsg=false;
      },5000)
        //response.result.id, 
        //response.result.name,
        //result response.result,
        //desc, response.price
        //emit()
        
    },
    error:(err)=>{

    }
  });
}

getAll(){
  this.productService.getAll().subscribe(
    {
      next:(response:any)=>{
       
        this.productlistdata=response.result;
        this.productlistdataChange.emit(this.productlistdata);

      },
    error:(err:any)=>{
      if(err.result==null){
        this.productlistdata=[];
        this.productlistdataChange.emit(this.productlistdata)
      }
    }
    })
}

}
