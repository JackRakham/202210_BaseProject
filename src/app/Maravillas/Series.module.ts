import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillasComponent } from './Maravillas.component';
import { DetalleMaravillasModule } from './DetalleMaravillas/DetalleMaravillas.module';

@NgModule({
  imports: [
    CommonModule,
    DetalleMaravillasModule
  ],
  declarations: [MaravillasComponent],
  exports: [MaravillasComponent]
})
export class MaravillasModule { }
