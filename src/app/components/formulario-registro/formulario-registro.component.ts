import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  idUsuario: string = '';
  nombreCompleto: string = '';
  usuario: string = '';
  password: string = '';

  constructor(private servicio: UsuariosService) {}

  saveUsers(form: NgForm) {
    if (form.valid) {
      const nuevoUsuario = {
        nombreCompleto: this.nombreCompleto,
        usuario: this.usuario,
        password: this.password
      };

      this.servicio.postUsuarios(nuevoUsuario).subscribe(
        response => {
          console.log('Usuario registrado con éxito:', response);
          form.resetForm();
        },
        error => {
          console.error('Error al registrar el usuario:', error);
        }
      );
    }
  }
}
