import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
@Input() productlistdata:any; //receiving input from parent component
constructor(private productService:ProductService){}
editProduct(id:any){
  alert(id);
  this.productService.getById(id).subscribe({
    next:(response)=>{
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
deleteProduct(id:any){
  alert(id);
}
}
