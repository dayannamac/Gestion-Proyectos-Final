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

  idUsuario: any;
  nombreCompleto: any;
  usuario: any;
  password: any;

  saveUsers(formulario: any) {

    this.servicio.getUsuarios().subscribe((users) => {
      let idMayor = 0;

      for (const user of users) {
        if (idMayor != 0) {
          if (user.id >= idMayor) {
            idMayor = user.id;
          }
        } else {
          idMayor = user.id
        }
      }

      this.idUsuario = idMayor + 1;
    });

    const temp = {
      id: this.idUsuario,
      nombre: formulario.value.nombre,
      usuario: formulario.value.usuario,
      password: formulario.value.password,
    }
    this.servicio.postUsuarios(temp).subscribe()

    alert('usuario registrado!')
    window.location.reload()
  }
}
