import { Component } from '@angular/core';
import { FormularioLoginComponent } from '../formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from '../formulario-registro/formulario-registro.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormularioLoginComponent, FormularioRegistroComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
