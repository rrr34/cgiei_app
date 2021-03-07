import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pilares } from '../../models/pilares.model';
import { PilaresService } from '../../services/pilares.service';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"

@Component({
  selector: 'app-pilares-lista',
  templateUrl: './pilares-lista.component.html',
  styleUrls: ['./pilares-lista.component.css']
})
export class PilaresListaComponent implements OnInit {

  pilares: Pilares[];

  constructor(private pilaresService: PilaresService,
    private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerPilares();
  }

  eliminarPilares(pil: Pilares) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el PILARES ${pil.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.pilaresService
          .deletePilares(pil)
          .subscribe(() => {
            this.obtenerPilares();
            this.snackBar.open(`PILARES ${pil.nombre} eliminado`, undefined, {
              duration: 3000,
            });
          });
      })
  }

  obtenerPilares(){
    return this.pilaresService.getPilares()
    .subscribe((pilares: Pilares[]) => this.pilares = pilares)
  }
}
