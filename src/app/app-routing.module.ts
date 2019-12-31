import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LeftComponent } from './left/left.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loginPage', component:  LoginComponent},
  { path: 'left', component: LeftComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
