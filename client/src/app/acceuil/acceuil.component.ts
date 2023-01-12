import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {


  //slider: any;
  cheminImage:any = "assets/images/1.jpg";
  i = 0; 
  authStatus: boolean | undefined ;
 

 constructor(private authService : AuthenticationService) { 

 }

 ngOnInit(): void {
   
  this.authStatus=this.authService.isAuth;

   const seconds = 3;
   
   // 👇️ call function every 3 seconds
   setInterval(() => {this.test();}, seconds * 1000);


 }

 test(): void {

   var images = new Array(
     "assets/images/2.jpg",
     "assets/images/3.jpg",
     "assets/images/1.jpeg",
     "assets/images/5.jpg",
     "assets/images/1.png",
   );

   var len = images.length;

   
   console.log("test");

   if(this.i> len-1){
     this.i=0;
   }
   this.cheminImage=images[this.i];
   this.i++;
   
 }

 onSignIn(){
  this.authService.signIn().then(
    ()=>{
      console.log('Connexion resussi');
      this.authStatus=this.authService.isAuth;
    }
  );
 }

 onSignOut(){
  this.authService.SignOut();
  this.authStatus=this.authService.isAuth;
}

}
