import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {

  constructor(private servicio: UserService) {}

  nombreCompleto: any;
  usuario: any;
  password: any;

  saveUsers(formulario: any) {

    const temp = {
      nombreCompleto: formulario.value.nombre,
      usuario: formulario.value.usuario,
      password: formulario.value.password,
    }
    this.servicio.postUsers(temp).subscribe()

    alert('usuario registrado!')
    window.location.reload()
  }
}
