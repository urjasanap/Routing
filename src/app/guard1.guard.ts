import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate {
constructor(private auth:AuthService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let ans = this.auth.isLoggedIn()
    //console.log("guard1",ans);
    if(ans){
      return true;
    }
    else{
      this.router.navigate(['/loginPage']);
      return false;
    }
    
  }
  
}
