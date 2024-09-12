import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:any={
    usuario:"",
    password:""
  }
  registro:any={
    
  }

  field:string="";
  constructor(public router: Router, public toastController:ToastController) { }

  ngOnInit() {
    console.log('LoginPage ngOnInit');
  }

  ngOnDestroy(){
    console.log('LoginPage ngOnDestroy');
  }

  ionViewWillEnter(){
    console.log('LoginPage ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('LoginPage ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('LoginPage ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('LoginPage ionViewDidLeave');
  }


  ingresar(){
    if(this.validateModel(this.login)){
      let navigationExtras : NavigationExtras ={
        state:{login: this.login}
      };
      this.router.navigate(['/home'], navigationExtras);
      
    }else{
      this.presentToast("middle","Favor de rellenar espacio: "+this.field)
    }
  }
  
  registarse(){
    let navigationExtras : NavigationExtras ={
      state :{registro: this.registro}
    }
    this.router.navigate(['/registro'], navigationExtras);
  }

 validateModel(model:any){
  for(var [key,value] of Object.entries(model)){
    if(value == ""){
      this.field = key;
      return false;
    }
  }
  return true;
 }

 async presentToast(position: 'top'|'middle'|'bottom', msg:string, duration?:number){
  const toast = await this.toastController.create({
    message: msg,
    duration: duration?duration:2500,
    position: position,
  });

  await toast.present();
 }
}
