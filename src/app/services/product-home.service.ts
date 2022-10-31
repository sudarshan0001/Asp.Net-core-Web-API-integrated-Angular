import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { producthome } from '../models/product-home';

@Injectable({
  providedIn: 'root'
})
export class ProductHomeService {
  private url = "cellphone/AllProducts";
  constructor( private http: HttpClient ) { }

  public getProductHome() : Observable<producthome[]>{
    return this.http.get<producthome[]>(`${environment.apiUrl}/${this.url}`);
  }
}
