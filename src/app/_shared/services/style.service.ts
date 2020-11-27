import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor(private http: HttpClient) {
   }

   getStyleUri(){
    return this.http.get("https://localhost:44324/api/selfcertification").toPromise();
  }
}
