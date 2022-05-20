import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaravillascomponentModule } from './Maravillascomponent/Maravillascomponent.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaravillascomponentModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
