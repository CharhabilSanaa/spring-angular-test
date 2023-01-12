import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderitem } from './orderitem';

@Injectable({
  providedIn: 'root'
})
export class OrderitemService {

  private baseURL="http://localhost:8080/ordersitems/add";


  constructor(private httpClient: HttpClient) { }

  createOrder(new_url:any,orderitem:Orderitem):Observable<Object>{

    console.log(orderitem);
    console.log(new_url);

    return this.httpClient.post(new_url,orderitem);
  }


  public addOrderItem(orderitem : Orderitem){

    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'});

    return this.httpClient.post<Orderitem>("http://localhost:8080/ordersitems/add",orderitem);
  }
}
