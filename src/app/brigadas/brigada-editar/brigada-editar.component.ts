import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Alcaldia } from '../../models/alcaldias.model';
import { PilaresService } from '../../services/pilares.service';
import { Lcp } from '../../models/lcpo.model';
import { Pilares } from '../../models/pilares.model';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"

@Component({
  selector: 'app-brigada-editar',
  templateUrl: './brigada-editar.component.html',
  styleUrls: ['./brigada-editar.component.css']
})
export class BrigadaEditarComponent implements OnInit {

  alcaldias: Alcaldia[];
  lcpo: Lcp[];
  brigada: Pilares = {
    nombre: '',
    responsable: null,
    alcaldia: null,
    ubicacion: ''
    // fecha: null
};
  constructor( private pilaresService: PilaresService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private dialogo: MatDialog) { }

  ngOnInit(): void {
    this.obtenerAlcaldias();
    this.obtenerlcp();
    this.obtenerInfoBrigada();
  }

  obtenerAlcaldias(){
    return this.pilaresService
    .getAlcaldias().subscribe((alcaldias: Alcaldia[]) => this.alcaldias = alcaldias );
  }

  obtenerlcp(){
    return this.pilaresService
    .getlcpo().subscribe((lcpo: Lcp[]) => this.lcpo = lcpo );
  }

  obtenerInfoBrigada(){
    let idBrigada = this.route.snapshot.paramMap.get("id");
    this.pilaresService.getBrigada(idBrigada).subscribe((brigada: Pilares) => this.brigada = brigada)
  }

  volver() {
    this.router.navigate(['/brigadas']);
  }

  onSubmit() {
    this.pilaresService.updateBrigada(this.brigada).subscribe(() => {
      this.snackBar.open(`Brigada ${this.brigada.nombre} actualizada`, undefined, {
        duration: 3000,
      });
      this.volver();
    });
  }

  cancel() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Desea cancelar la edición de la brigada?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.router.navigate(['/brigadas']);
        } 
      })
  }

}
