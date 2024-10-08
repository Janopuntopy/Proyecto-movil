import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registro:any={
    usuario:"",
    password:"",
    correo:"",
    fecha:""
  };

 

  field:string="";
  constructor(public router: Router, public toastController:ToastController) {
  }

  ngOnInit() {
  }

  registrarse(){
    if(this.validateModel(this.registro)){
      let navigationExtras : NavigationExtras ={
        state:{registro: this.registro}
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
