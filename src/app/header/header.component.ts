import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public myvar1 = true;
  public myvar2 = false;
  public username = "";

  constructor(private auth:AuthService) {  }


  ngOnInit() {
    //console.log(this.auth)
    //console.log(this.auth.isLoggedIn())
    //console.log(this.auth.getval())
    let ans = this.auth.isLoggedIn()
    if(ans){
      this.myvar2=true;
      this.myvar1=false;
      this.username=this.auth.getval();
    }
  }

}
