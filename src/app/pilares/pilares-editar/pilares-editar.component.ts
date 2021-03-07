import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Alcaldia } from '../../models/alcaldias.model';
import { PilaresService } from '../../services/pilares.service';
import { Lcp } from '../../models/lcpo.model';
import { Statuss } from '../../models/status.model';
import { Pilares } from '../../models/pilares.model';
import { DialogoConfirmacionComponent } from '../../dialogo-confirmacion/dialogo-confirmacion.component';


@Component({
  selector: 'app-pilares-editar',
  templateUrl: './pilares-editar.component.html',
  styleUrls: ['./pilares-editar.component.css']
})
export class PilaresEditarComponent implements OnInit {

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
    private route: ActivatedRoute,
    private dialogo: MatDialog ) { }

  ngOnInit(): void {
    this.obtenerAlcaldias();
    this.obtenerlcp();
    this.obtenerStat();
    this.obtenerInfoPilares();
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

  obtenerInfoPilares(){
    let idPilares = this.route.snapshot.paramMap.get("id");
    this.pilaresService.getPilar(idPilares).subscribe((pilares: Pilares) => this.pilares = pilares)
  }

  volver() {
    this.router.navigate(['/pilares']);
  }

  onSubmit() {
    this.pilaresService.updatePilares(this.pilares).subscribe(() => {
      this.snackBar.open(`PILARES ${this.pilares.nombre} actualizado`, undefined, {
        duration: 3000,
      });
      this.volver();
    });
  }

  cancel() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Desea cancelar la edición del PILARES?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.router.navigate(['/pilares']);
        } 
      })
  }

}
