import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MaravillasService } from './maravillas.service';
import { Maravillas } from './maravilla';
@Component({
  selector: 'app-Maravillas',
  templateUrl: './Maravillas.component.html',
  styleUrls: ['./Maravillas.css']
})
export class MaravillasComponent implements OnInit {

  active_link = "";
  maravillaActual : Maravillas = {} as Maravillas;
  constructor(private serieService : MaravillasService) { }

  @Output() clickDetalle = new EventEmitter<Maravillas>();
  Maravillaslist: Array<Maravillas> = [];

  getMaravillas() {
    this.serieService.getMaravillas().subscribe(maravillas => {
    this.Maravillaslist = maravillas.sort((n1,n2) =>
    {if (n1.country > n2.country){
      return 1;
    }
    if (n1.country < n2.country) {
      return -1;
    }
    return 0
  });
    console.log(maravillas.length);


    });
  }

  ngOnInit() {
    this.getMaravillas();


  }


  clickMaravilla(maravilla:Maravillas) {
    this.maravillaActual = maravilla;
    this.active_link =  "detalle-maravilla";
    this.clickDetalle.emit(maravilla);
    console.log(maravilla);

}
}
