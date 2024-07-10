import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  constructor(private service: UserService, private ruta: Router){}

  password: any;
  usuario: any;

  login(formulario: any) {
    this.service.getUsers().suscribe((users) => {

      let foundUser;

      for (const user of users) {

        if (user.usuario === formulario.value.usuario && user.password === formulario.value.password) {
          // Aquí va el id
          let userName = user.name;
          localStorage.setItem('usuarioNom', userName)
          foundUser = user;
          break;
        }
      }

      if(foundUser) {
        alert('Bienvenido');
        window.location.reload()
        localStorage.setItem('login', 'true');
        localStorage.setItem('usuario', JSON.stringify(foundUser));
        this.ruta.navigate(['/inicio']);
      } else {
        alert('Usuario o contraseña incorrecto!');
      }
    });
  }
  
}
