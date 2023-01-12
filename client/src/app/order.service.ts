import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private baseURL="http://localhost:8080/orders";


  constructor(private httpClient: HttpClient) { 

  }

  getOrdersList():Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.baseURL);
  }

  createOrder(order:Order):Observable<Object>{
    return this.httpClient.post('${this.baseURL}',order);
  }

  public addOrder(order : Order){
    return this.httpClient.post<Order>("http://localhost:8080/orders/add",order);
  }

  
}
