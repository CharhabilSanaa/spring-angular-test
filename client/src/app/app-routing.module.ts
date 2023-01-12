import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderListComponent } from './order-list/order-list.component';

const appRoutes : Routes = [
  { path : 'acceuil' , component : AcceuilComponent},
  { path : 'articles' , component : ArticleListComponent},
  { path : 'articles/add-article' , component : CreateArticleComponent},
  { path : 'orders/add-order' , component : CreateOrderComponent},
  { path : 'orders' , component : OrderListComponent},
  { path : '' , component : AcceuilComponent},





];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
