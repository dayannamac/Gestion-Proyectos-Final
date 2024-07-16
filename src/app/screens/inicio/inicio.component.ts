import { Component } from '@angular/core';
import { FormularioEntradaComponent } from '../../components/formulario-entrada/formulario-entrada.component';
import { FormularioEditarEliminarEntradaComponent } from '../../components/formulario-editar-eliminar-entrada/formulario-editar-eliminar-entrada.component';
import { CommonModule } from '@angular/common';
import { FormularioLoginComponent } from '../../components/formulario-login/formulario-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormularioEntradaComponent, FormularioEditarEliminarEntradaComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private ruta: Router){}

  cerrarSesion() {
    FormularioLoginComponent.logeado = false;
    this.ruta.navigate(['']);
  }
}
