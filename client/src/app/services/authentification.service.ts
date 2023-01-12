import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {

  isAuth = false;

  signIn(){
    return new Promise(
      (resolve,reject)=>{
        setTimeout(
          ()=>{
            this.isAuth=true;
            resolve(true);
          },2000
        );
      }
    );
  }

  SignOut(){
    this.isAuth=false;
  }



}