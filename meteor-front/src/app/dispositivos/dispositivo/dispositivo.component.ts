import { Component, OnInit } from '@angular/core';
import { dispositivo } from './model/dispositivo.model';
import { meteorappService } from '../../service/meteorapp.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit{

  dispositivos: dispositivo[] =  [];


  constructor(
    private  meteorapp: meteorappService){

  }

  ngOnInit() {
    this.getDispositivos();
  }


  getDispositivos(): void {
    this.meteorapp.getDispositivo().subscribe(data =>{
      console.log(data["result"]);
      this.dispositivos = data["result"];
      
    });
  }
}
