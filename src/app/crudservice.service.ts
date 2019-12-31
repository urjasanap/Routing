import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  public apiUrl="http://localhost:3000/"


  constructor(public http:HttpClient) {

   }
   selectData(jsonkey){
     return this.http.get(this.apiUrl+jsonkey)
   }
}
