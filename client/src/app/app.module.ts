import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenuComponent } from './menu/menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AuthenticationService } from './services/authentification.service';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FormsModule } from '@angular/forms';
import { CreateOrderComponent } from './create-order/create-order.component';
import { FooterComponent } from './footer/footer.component';
import { OrderitemComponent } from './orderitem/orderitem.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    AcceuilComponent,
    MenuComponent,
    OrderListComponent,
    CreateArticleComponent,
    CreateOrderComponent,
    FooterComponent,
    OrderitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationService,MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
