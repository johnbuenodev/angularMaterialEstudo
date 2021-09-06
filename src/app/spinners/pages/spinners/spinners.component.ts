import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent implements OnInit {

  color: ThemePalette = 'primary';
  color2: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  valor = 0;
  showSinner = false;
  mostrar = false;

  colorValue: ThemePalette = 'accent';
  colorValue2: ThemePalette = 'warn';

  items : Array<{valor: number}> = [];

  constructor() { }

   async ngOnInit(){
    
    for(let i = 1; i < 1000; i++){ 
      await this.aguardar(i);
    }
  
  }

  async aguardar(i: any){

    
    await setTimeout(() => {
      this.valor = this.valor + i;
      this.items.push({valor:i})
      console.log("testando: " + i);
    }, 3000);

    
  }

  loaddb(){
    this.showSinner = true;
    setTimeout(()=>{
       this.showSinner = false; 
    }, 5000)

  }

}
