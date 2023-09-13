import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { dispositivo } from "src/app/dispositivos/dispositivo/model/dispositivo.model";
import { dado } from "../dispositivos/dispositivo/model/dado.model";


@Injectable({ providedIn: 'root' })
export class meteorappService {

    apiUrl = 'http://localhost:3000/meteorapp';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getDispositivo(): Observable<dispositivo> {
        const url = this.apiUrl + '/dispositivos/'
        return this.httpClient.get<dispositivo>(url);
    }

    public getDados(id: number): Observable<dado> {
      const url = this.apiUrl + '/dados/now/'+id;
      return this.httpClient.get<dado>(url);
  }
}
