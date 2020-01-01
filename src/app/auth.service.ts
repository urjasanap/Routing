import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    let ans = localStorage.getItem("name");
    // urja or null
    if(ans === null){
      return false;
    }
    else{
      return true;
    }
  }

  getval(){
    return localStorage.getItem("name");
    //urja
  }
}
