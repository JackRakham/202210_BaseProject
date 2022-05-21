import { Component, OnInit, Input } from '@angular/core';
import { Maravillas } from '../maravilla';

@Component({
  selector: 'app-DetalleMaravillas',
  templateUrl: './DetalleMaravillas.component.html',
  styleUrls: ['./DetalleMaravillas.component.css']
})
export class DetalleMaravillasComponent implements OnInit {
  activo:string = "detalle-maravilla";
  @Input() public Maravilla:Maravillas = {} as Maravillas;
  constructor() { }

  ngOnInit() {

  }

}
