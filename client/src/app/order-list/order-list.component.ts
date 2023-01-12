import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import {Order} from '../order';
import { OrderService } from '../order.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders :  Order[] | undefined;

  constructor(private orderService : OrderService
    ) { }

  ngOnInit(): void {

    this.getOrders();


    /*this.orders=[{
      "id":1,
      "reference":"tye14nnxdf",
      "articles":"[1,4]",
      "date_order": "2020-08-01"
    },
    {
      "id":2,
      "reference":"tye123nnxdf",
      "articles":"[6,5,3]",
      "date_order": "2020-06-01"
    },
    {
      "id":3,
      "reference":"tyinw44xdf",
      "articles":"[1,4]",
      "date_order": "2020-08-01"
    },
    {
      "id":4,
      "reference":"ty37n4nnxdf",
      "articles":"[7]",
      "date_order": "2023-08-01"
    },
  ];*/

  }

  private getOrders(){
    /*this.orderService.getOrdersList().subscribe(data =>{
      console.log(data);
      this.orders=data;
    });*/

    this.orderService.getOrdersList()
    .pipe(
      map((x:Order[],i)=>x.map((order:Order)=> this.getArticlesofOrder(order)))
    ).subscribe((resp:Order[]) =>{
      console.log(resp);
      this.orders=resp;
    });

  }

  public getArticlesofOrder(order : Order){

    const Items : any =order.orderItems;
    var   ItemsDescription:any ='';
    var   ItemsDescriptionvar:String ='';
    var numbers = new Array(); 



    for (var i = 0; i < Items.length; i++) {

      var name=Items[i].article['name'];
      var price=Items[i].article['price'];
      ItemsDescriptionvar=name.concat(' : ', price,' MAD , ');
      

      numbers.push(ItemsDescriptionvar);

    }

    for (var i = 0; i < numbers.length; i++) {
      ItemsDescription=ItemsDescription.concat(numbers[i]);
    }

    order.orderItems=ItemsDescription;

    //customise date format:
    const DateOrder : any =order.createdDate;
    
    console.log(DateOrder);




    return order;

 

  }

}
