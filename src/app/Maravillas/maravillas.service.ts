import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Maravillas } from './maravilla';
@Injectable({
  providedIn: 'root'
})
export class MaravillasService {
private apiUrl = "https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/wonders.json";
constructor(private http: HttpClient) { }

getMaravillas(): Observable<Maravillas[]> {
  return this.http.get<Maravillas[]>(this.apiUrl);
}
}
