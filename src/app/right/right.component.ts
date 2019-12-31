import { Component, OnInit } from '@angular/core';
import {CrudserviceService} from '../crudservice.service'

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  public proData:any;
 
  constructor(private crudservice:CrudserviceService) {

   }

  ngOnInit() {
    //////////////////////////////////
    this.crudservice.selectData("product").subscribe(
      (res)=>{
        console.log(res)
        this.proData = res;
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
