import { CanActivateFn, Router } from '@angular/router';
import { FormularioLoginComponent } from '../../components/formulario-login/formulario-login.component';
import { inject } from '@angular/core';

export const usuarioGuard: CanActivateFn = (route, state) => {

  let acceso:boolean = FormularioLoginComponent.logeado;
  const router = inject(Router);

  if (acceso === true) {
    return true;
  } else {
    router.navigate([''])
    return false;
  }
  
};
