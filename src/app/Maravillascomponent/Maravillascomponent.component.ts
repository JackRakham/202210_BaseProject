import { Component, OnInit } from '@angular/core';
import { Maravillas } from './Maravillasclass';
import { MaravillasService } from './Maravillas.service';
@Component({
  selector: 'app-Maravillascomponent',
  templateUrl: './Maravillascomponent.component.html',
  styleUrls: ['./Maravillascomponent.component.css']
})
export class MaravillascomponentComponent implements OnInit {


  constructor(private maravillasService: MaravillasService) {


   }
   Maravillaslist: Array<Maravillas> = [];
   getMaravillas() {
    this.maravillasService.getMaravillas().subscribe(maravillas => {
      this.Maravillaslist = maravillas;
      console.log(maravillas.length);


    });
  }

  ngOnInit() {
    this.getMaravillas();
  }




}
