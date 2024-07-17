import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { InicioComponent } from './screens/inicio/inicio.component';
import { usuarioGuard } from './guards/usuario/usuario.guard';

export const routes: Routes = [
    { path:"", component: HomeComponent },
    { path:"inicio", component: InicioComponent }
];