import { Component, OnInit } from '@angular/core';
import { Alcaldia } from '../../models/alcaldias.model';
import { PilaresService } from '../../services/pilares.service';
import { Estudios } from '../../models/estudios.model';
import { Comprobante } from '../../models/comprobante.model';

@Component({
  selector: 'app-col-nuevo',
  templateUrl: './col-nuevo.component.html',
  styleUrls: ['./col-nuevo.component.css']
})
export class ColNuevoComponent implements OnInit {

  alcaldias: Alcaldia[];
  selectedAlc: string;
  estudios: Estudios[];
  selectedEstudios: number;
  comprobante: Comprobante[];
  selectedComp: string;

  enfermedad = ["sí", "no"];
  
  constructor( private pilaresService: PilaresService ) { }

  ngOnInit(): void {
    this.obtenerAlcaldias();
    this.obtenerEstudios();
    this.obtenerComprobante();
  }

  obtenerAlcaldias(){
    return this.pilaresService
    .getAlcaldias().subscribe((alcaldias: Alcaldia[]) => this.alcaldias = alcaldias );
  }

  obtenerEstudios(){
    return this.pilaresService
    .getEstudios().subscribe((estudios: Estudios[]) => this.estudios = estudios );
  }

  obtenerComprobante(){
    return this.pilaresService
    .getComprobante().subscribe((comprobante: Comprobante[]) => this.comprobante = comprobante );
  }

}
