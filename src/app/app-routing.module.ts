import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LeftComponent } from './left/left.component';
import { CartComponent } from './cart/cart.component';
import { PasswdComponent } from './passwd/passwd.component';
import { Guard1Guard } from './guard1.guard';
import { LogoutComponent } from './logout/logout.component';
import { Guard2Guard } from './guard2.guard';
 



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loginPage', component:  LoginComponent,canActivate:[Guard2Guard]},
  { path: 'left', component: LeftComponent },
  { path: 'cart', component: CartComponent },
  { path: 'passwd', component: PasswdComponent ,canActivate:[Guard1Guard] },
  { path: 'logout', component: LogoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
