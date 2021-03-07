import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pilares } from '../../models/pilares.model';
import { PilaresService } from '../../services/pilares.service';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"

@Component({
  selector: 'app-brigadas-lista',
  templateUrl: './brigadas-lista.component.html',
  styleUrls: ['./brigadas-lista.component.css']
})
export class BrigadasListaComponent implements OnInit {

  brigadas: Pilares[];

  constructor(private pilaresService: PilaresService,
    private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerBrigadas();
  }

  obtenerBrigadas(){
    return this.pilaresService.getBrigadas()
    .subscribe((brigadas: Pilares[]) => this.brigadas = brigadas)
  }

  eliminarBrigada(brigada: Pilares) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la brigada ${brigada.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.pilaresService
          .deleteBrigada(brigada)
          .subscribe(() => {
            this.obtenerBrigadas();
            this.snackBar.open(`Brigada ${brigada.nombre} eliminada`, undefined, {
              duration: 2500,
            });
          });
      })
  }

}
