import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsDetailsComponent } from './component/products/products-details/products-details.component';
import { ProductsMoredetailsComponent } from './component/products/products-details/products-moredetails/products-moredetails.component';
import { ProductsComponent } from './component/products/products.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"footer",component:FooterComponent},
  {path:"contact",component:ContactComponent},

  {path:"products",component:ProductsComponent},
  {path:"products/products_details/:id",component:ProductsDetailsComponent},
  {path:"products/products_details/products_moredetails/:id/:pid",component:ProductsMoredetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
