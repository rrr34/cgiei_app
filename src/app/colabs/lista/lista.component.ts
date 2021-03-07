import { Component, OnInit } from '@angular/core';
import { Colabs } from '../colabs-model';
import { ColabsService } from '../../services/colabs.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ColabsListaComponent implements OnInit {

  colabs: Colabs[];

  constructor(private colabsService: ColabsService) { }

  ngOnInit(): void {
    this.obtenerColaboradores();
  }

  obtenerColaboradores(){
    return this.colabsService.getColabs().subscribe((colabs: Colabs[]) => this.colabs = colabs)
  }

}
