import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PilaresNuevoComponent } from './pilares/pilares-nuevo/pilares-nuevo.component';
import { BrigadaNuevaComponent } from './brigadas/brigada-nueva/brigada-nueva.component';
import { ColNuevoComponent } from './colabs/col-nuevo/col-nuevo.component';
import { HomeComponent } from './home/home.component';
import { ColabsListaComponent } from './colabs/lista/lista.component';
import { ColabsService } from './services/colabs.service';
import { PilaresListaComponent } from './pilares/pilares-lista/pilares-lista.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { BrigadasListaComponent } from './brigadas/brigadas-lista/brigadas-lista.component';
import { PilaresEditarComponent } from './pilares/pilares-editar/pilares-editar.component';
import { BrigadaEditarComponent } from './brigadas/brigada-editar/brigada-editar.component';
import { ColEditarComponent } from './colabs/col-editar/col-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    PilaresNuevoComponent,
    BrigadaNuevaComponent,
    ColNuevoComponent,
    HomeComponent,
    ColabsListaComponent,
    PilaresListaComponent,
    DialogoConfirmacionComponent,
    BrigadasListaComponent,
    PilaresEditarComponent,
    BrigadaEditarComponent,
    ColEditarComponent
  ],
  entryComponents: [
    DialogoConfirmacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule

  ],
  providers: [ ColabsService,  MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
