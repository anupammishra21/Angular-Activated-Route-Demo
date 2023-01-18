import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './component/home/home.component';
import { PagenofoundComponent } from './component/pagenofound/pagenofound.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductsDetailsComponent } from './component/products/products-details/products-details.component';
import { ProductsMoredetailsComponent } from './component/products/products-details/products-moredetails/products-moredetails.component';
import { ProductService } from './service/servicenew.service';
import { FooterComponent } from './component/footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    PagenofoundComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    ProductsMoredetailsComponent,
    FooterComponent,
    SearchbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
