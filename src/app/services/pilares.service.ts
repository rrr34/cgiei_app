import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pilares } from '../models/pilares.model';

@Injectable({
  providedIn: 'root'
})
export class PilaresService {

  baseUrl="http://localhost/models";
  constructor(private http: HttpClient) { }

  getPilares(){
    return this.http.get(`${this.baseUrl}/getPilares.php`);
  }

  getBrigadas(){
    return this.http.get(`${this.baseUrl}/getBrigadas.php`);
  }

  getAlcaldias(){
    return this.http.get(`${this.baseUrl}/getAlcaldias.php`);
  }

  getlcpo(){
    return this.http.get(`${this.baseUrl}/getDirectores.php`);
  }

  getStatus(){
    return this.http.get(`${this.baseUrl}/getStatus.php`);
  }

  getEstudios(){
    return this.http.get(`${this.baseUrl}/getEstudios.php`);
  }

  getComprobante(){
    return this.http.get(`${this.baseUrl}/getComprobante.php`);
  }

  sendPilares(pilares: Pilares){
    return this.http.post(`${this.baseUrl}/insertPilares.php`, pilares);
  }

  sendBrigada(brigada: Pilares){
    return this.http.post(`${this.baseUrl}/insertBrigada.php`, brigada);
  }

  deletePilares(pilares: Pilares) {
    return this.http.delete(`${this.baseUrl}/deletePilares.php?idPilares=${pilares.id}`);
  }

  deleteBrigada(brigada: Pilares) {
    return this.http.delete(`${this.baseUrl}/deleteBrigada.php?idBrigada=${brigada.id}`);
  }

  getPilar(id: string | number) {
    return this.http.get(`${this.baseUrl}/getPilar.php?idPilares=${id}`);
  }

  getBrigada(id: string | number) {
    return this.http.get(`${this.baseUrl}/getBrigada.php?idBrigada=${id}`);
  }

  updatePilares(pilares: Pilares){
    return this.http.put(`${this.baseUrl}/updatePilares.php`, pilares);
  }

  updateBrigada(brigada: Pilares){
    return this.http.put(`${this.baseUrl}/updateBrigada.php`, brigada);
  }
}
