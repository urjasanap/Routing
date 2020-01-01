import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Guard2Guard implements CanActivate {
  constructor(private auth:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      let ans = this.auth.isLoggedIn()
      //console.log("guard1",ans);
      if(ans){
        return false;
      }
      else{
        
        return true;
      }
  }
  
}
