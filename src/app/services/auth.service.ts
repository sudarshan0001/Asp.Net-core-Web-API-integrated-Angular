import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { producthome } from '../models/product-home';
import { searchProduct } from '../models/search-Item';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  }),
  withCredentials:true
};
  // searchItem1: string = '' ;
 // private url: string = "Account";

  constructor(private http: HttpClient) {
    
   }

signUp(userObj: any){
  return this.http.post<any>(`${environment.apiUrl}/account/register`,userObj)
}

login(loginObj:any){
  return this.http.post<any>(`${environment.apiUrl}/Account/login`,loginObj,this.httpOptions)
}

create(prodObj: any){
  return this.http.post<any>(`${environment.apiUrl}/cellphone/addProduct`,prodObj,this.httpOptions)
}

// public onSearch(searchObj: any):{
// //   // console.log(searchObj);
// //  // this.searchItem1 = searchObj.valueOf();
// //   return this.http.get(`https://localhost:44326/api/cellphone/searchproduct`,searchObj).map((res: Response))
// // }

public onSearch(searchObj:any): Observable<searchProduct[]>{
  return this.http.get<searchProduct[]>(`${environment.apiUrl}/cellPhone/searchproduct/`+searchObj)
}

}
