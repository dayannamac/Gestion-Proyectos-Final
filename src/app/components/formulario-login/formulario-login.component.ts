import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  constructor(private service: UsuariosService, private ruta: Router){}

  public static logeado: boolean = false;

  password: any;
  usuario: any;

  login(formulario: any) {
    console.log(formulario.value);
    this.service.getUsuarios().subscribe((users) => {
      console.log('Usuarios obtenidos:', users);
      let foundUser;

      for (const user of users) {

        if (user.usuario === formulario.value.usuario && user.password === formulario.value.password) {
          let userID = user.id;
          let userName = user.name;
          localStorage.setItem('usuarioID', userID)
          localStorage.setItem('usuarioNom', userName)
          foundUser = user;
          break;
        }
      }

      if(foundUser) {
        alert('Bienvenido');
        FormularioLoginComponent.logeado = true;
        localStorage.setItem('usuario', JSON.stringify(foundUser));
        this.ruta.navigate(['inicio']);
      } else {
        alert('Usuario o contraseña incorrecto!');
      }
    });
  }
  
}
