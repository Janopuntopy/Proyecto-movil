import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  data:any={
    usuario:"",
    password:"",
    correo:"",
    fecha:""
  };

  constructor() { }

  ngOnInit() {
  }

  

}
