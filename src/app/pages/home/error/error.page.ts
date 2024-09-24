import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {

  error:any={
    usuario:"",
    newpassword:""
  }

  field:string="";
  constructor(public router: Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  Error(){
    if(this.validateModel(this.error)){
      let navigationExtras : NavigationExtras ={
        state:{error: this.error}
      };
      this.router.navigate(['/login'], navigationExtras);
      
    }else{
      this.presentToast("middle","Favor rellenar datos: "+this.field)
    }
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
