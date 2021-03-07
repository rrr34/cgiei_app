import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColabsService {

  baseUrl="http://localhost/models";

  constructor(private http: HttpClient) { }

  getColabs() {
    return this.http.get(`${this.baseUrl}/getColabs.php`);
  }
}
