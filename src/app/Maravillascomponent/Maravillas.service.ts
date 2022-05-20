import { Injectable } from '@angular/core';
import { Maravillas } from './Maravillasclass';
import { Observable } from 'rxjs';
import { HttpClient  } from "@Angular/common/http";
import { MaravillascomponentModule } from './Maravillascomponent.module';



@Injectable({
  providedIn: 'root'
})
export class MaravillasService {
private apiUrl = "https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/wonders.json";

constructor(private http : HttpClient) { }

getMaravillas() : Observable<Maravillas[]>{
  return this.http.get<Maravillas[]>(this.apiUrl);
}
}
