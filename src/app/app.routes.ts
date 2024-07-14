import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { InicioComponent } from './screens/inicio/inicio.component';

export const routes: Routes = [
    { path:"", component: HomeComponent },
    { path:"inicio", component: InicioComponent }
];