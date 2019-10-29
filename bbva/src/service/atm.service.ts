import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtmService {
  url: string = "https://apis.bbvabancomer.com/locations_sbx/v1/atms";
  constructor(
    private http: HttpClient
  ) { }

  obtenerATM() {
    return this.http.get(this.url);
  }
}
