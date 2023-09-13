import { Component, Input, OnInit } from '@angular/core';
import { meteorappService } from '../../service/meteorapp.service';
import { dado } from '../dispositivo/model/dado.model';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent  implements OnInit{

  @Input() recebeFiltro: any;


  dados: dado[] =  [];
  constructor(
    public  meteorapp: meteorappService){

  }

  ngOnInit() {
    this.getDados();
    setTimeout(function(){ location.reload() }, 20000); 
  }

  

  getDados(): void {
   


      this.meteorapp.getDados(this.recebeFiltro).subscribe(data =>{
        this.dados = data["result"];
        console.log(this.dados);
      });

      


     
  }

}
