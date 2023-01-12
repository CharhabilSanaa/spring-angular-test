import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  authStatus: boolean = true ;



  constructor(private authService : AuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
    this.authStatus=this.authService.isAuth;

  }

  

  

}
