import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChild('animarH1',{read: ElementRef, static: true})
  animarH1!:ElementRef;
  

  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

  //usuario?:String;
  niveles:any[]=[
    {id:1,nivel:"Monopoly General"},
    {id:2,nivel:"Clue General"},
    {id:3,nivel:"Magic General"},
    {id:4,nivel:"Yugioh General"},
    {id:5,nivel:"Pokemon General"},
    {id:6,nivel:"Partida General"}
  ]
  //Construyo un modelo para limpiar
  data:any={
    nombrePartida:"",
    numParticipante:"",
    juego:"",
    puntos:""
  };
  login:any;
  private animation!:Animation;
  constructor(public alertController:AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private animationController: AnimationController) {
    //recibo el parametro enviado desde la page Login
    this.activatedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.login=this.router.getCurrentNavigation()?.extras?.state?.['login'];
        console.log(this.login)
      }
    });
  }
  ngAfterViewInit(){
    const animarH1=this.animationController
      .create()
      .addElement(this.animarH1.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, color: 'yellow' },
        { offset: 0.72, color: 'var(--background)' },
        { offset: 1, color: 'purple' }
     ]);
     this.animation = this.animationController
      .create()
      .duration(4000)
      .iterations(Infinity)
      .addAnimation([animarH1]);

      this.animation.play();
     
  }
  /**
   
Metodo limpíar recorre un objeto y se define el 
valor de su propiedad en ""*/
limpiar(){
for (var [key, value] of Object.entries(this.data)) {
  Object.defineProperty(this.data,key,{value:""})}
}
/**
 * Metodo para mostrar los datos entregados
 */
mostrar(){
  (this.data.nombrePartida!="" && this.data.numParticipante!="") && 
  this.presentAlert("Usuario","Nombre de partida es "+this.data.nombrePartida+" y su numero de participantes es: "+this.data.numParticipante)||
  this.presentAlert("Error","Debe ingresar nombre de la partida y numero de participantes.");
}

async presentAlert(titulo:string,message:string) {
  const alert = await this.alertController.create({
    header: titulo,
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}


}
