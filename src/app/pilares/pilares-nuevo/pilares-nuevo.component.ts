import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Alcaldia } from '../../models/alcaldias.model';
import { PilaresService } from '../../services/pilares.service';
import { Lcp } from '../../models/lcpo.model';
import { Statuss } from '../../models/status.model';
import { Pilares } from '../../models/pilares.model';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"

@Component({
  selector: 'app-pilares-nuevo',
  templateUrl: './pilares-nuevo.component.html',
  styleUrls: ['./pilares-nuevo.component.css']
})
export class PilaresNuevoComponent implements OnInit {

  alcaldias: Alcaldia[];
  lcpo: Lcp[];
  status: Statuss[];
  pilares: Pilares = {
    nombre: '',
    responsable: null,
    alcaldia: null,
    ubicacion: '',
    estado: null,
    fecha: null
};

  constructor( private pilaresService: PilaresService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogo: MatDialog
    ) { }

  ngOnInit(): void {
    this.obtenerAlcaldias();
    this.obtenerlcp();
    this.obtenerStat();
  }

  obtenerAlcaldias(){
    return this.pilaresService
    .getAlcaldias().subscribe((alcaldias: Alcaldia[]) => this.alcaldias = alcaldias );
  }

  obtenerlcp(){
    return this.pilaresService
    .getlcpo().subscribe((lcpo: Lcp[]) => this.lcpo = lcpo );
  }

  obtenerStat(){
    return this.pilaresService
    .getStatus().subscribe((status: Statuss[]) => this.status = status );
  }

  onSubmit(){
    this.pilaresService.sendPilares(this.pilares).subscribe(() => {
      this.snackBar.open(`PILARES ${this.pilares.nombre} guardado`, undefined, {
        duration: 3000,
      });
      this.router.navigate(['/pilares']);
    })
  }

  cancel() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `El PILARES no se guardará. ¿Desea cancelar el registro del PILARES?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.router.navigate(['/pilares']);
        } 
      })
  }
}
