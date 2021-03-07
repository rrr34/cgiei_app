import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Alcaldia } from '../../models/alcaldias.model';
import { PilaresService } from '../../services/pilares.service';
import { Lcp } from '../../models/lcpo.model';
import { Pilares } from '../../models/pilares.model';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"


@Component({
  selector: 'app-brigada-nueva',
  templateUrl: './brigada-nueva.component.html',
  styleUrls: ['./brigada-nueva.component.css']
})
export class BrigadaNuevaComponent implements OnInit {

  alcaldias: Alcaldia[];
  lcpo: Lcp[];
  brigada: Pilares = {
    nombre: '',
    responsable: null,
    alcaldia: null,
    ubicacion: '',
    fecha: null
};

  constructor( private pilaresService: PilaresService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogo: MatDialog ) { }

  ngOnInit(): void {
    this.obtenerAlcaldias();
    this.obtenerlcp();
  }

  obtenerAlcaldias(){
    return this.pilaresService
    .getAlcaldias().subscribe((alcaldias: Alcaldia[]) => this.alcaldias = alcaldias );
  }

  obtenerlcp(){
    return this.pilaresService
    .getlcpo().subscribe((lcpo: Lcp[]) => this.lcpo = lcpo );
  }

  onSubmit(){
    this.pilaresService.sendBrigada(this.brigada).subscribe(() => {
      this.snackBar.open(`Brigada ${this.brigada.nombre} guardada`, undefined, {
        duration: 3000,
      });
      this.router.navigate(['/brigadas']);
    })
  }

  cancel() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `La brigada no se guardará. ¿Desea cancelar el registro de la brigada?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.router.navigate(['/brigadas']);
        } 
      })
  }
}
