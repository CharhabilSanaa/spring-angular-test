import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ImageProcessingService } from '../image-processing.service';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Orderitem } from '../orderitem';
import { OrderitemService } from '../orderitem.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  order:Order = new Order();
  orderitem:Orderitem = new Orderitem();

  articles:Article[] | undefined;

  searchText:string='';
  filteredItems : Article[] | undefined;
  selectedItems : Article[]=[];
  currentdate : Date = new Date();
  DateReceivedOrder=this.addDays(this.currentdate,10);


  constructor(private articleService:ArticleService,
    private imageProcessingService : ImageProcessingService,
    private orderService : OrderService, private orderitemService : OrderitemService,private router:Router) { }

  ngOnInit(): void {

    console.log("displaying articles");

    this.getArticles();

  }

  private getArticles(){
    this.articleService.getArticlesList()
    .pipe(
      map((x:Article[],i)=>x.map((article:Article)=> this.imageProcessingService.createImages(article)))
    ).subscribe((resp:Article[]) =>{
      console.log(resp);
      this.articles=resp;
    });
  }

  saveOrder(){

    this.orderService.addOrder(this.order).subscribe(
      data => {
        console.log(data);
      }
    )
  }


  onSubmit(){

    //save the order:
    this.saveOrder();

    //list des articles choisi
    var choosenItems = this.selectedItems;

    this.order.orderItems=this.selectedItems;

    for(var i = 0; i < choosenItems.length; i++)
    { 

        //definition of attributte for order items:
        this.orderitem.article_id=choosenItems[i].id; 

        //new url:
        const new_url="http://localhost:8080/ordersitems/add/"+this.orderitem.article_id;
        this.saveOrderItem(new_url);


        
    }

    this.goToOrderList();



  }

  search():void{

    if(this.searchText==""){
      this.filteredItems=[];
      return ;
    }
    this.filteredItems= this.articles?.filter(item => item.name?.toUpperCase().includes(this.searchText.toUpperCase()));


  }

  selectItem(selectedItem : Article){
    console.log(selectedItem);
    this.selectedItems?.push(selectedItem);
    this.filteredItems=[];
    this.searchText="";
  }

  removeItem(ItemToBeRemoved : Article):void{
    this.selectedItems=this.selectedItems.filter(item => item.id != ItemToBeRemoved.id);
  }

  //order items save:
  saveOrderItem(new_url:String){


    this.orderitemService.createOrder(new_url,this.orderitem).subscribe(
      data => {
        console.log('yes: ');
        console.log(data);
      }
    )
  }

  goToOrderList(){
    this.router.navigate(['/orders']);
  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }


}
