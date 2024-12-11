import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    AddProductComponent,
    HomeComponent,
    CategoriesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
