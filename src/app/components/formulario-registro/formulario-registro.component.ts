import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {

  constructor(private servicio: UsuariosService) {}

  nombreCompleto: any;
  usuario: any;
  password: any;

  saveUsers(formulario: any) {

    const temp = {
      nombreCompleto: formulario.value.nombre,
      usuario: formulario.value.usuario,
      password: formulario.value.password,
    }
    //this.servicio.postUsers(temp).subscribe()

    alert('usuario registrado!')
    window.location.reload()
  }
}
