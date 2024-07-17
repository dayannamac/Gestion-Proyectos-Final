import { Component } from '@angular/core';
import { FormularioEntradaComponent } from '../../components/formulario-entrada/formulario-entrada.component';
import { FormularioEditarEliminarEntradaComponent } from '../../components/formulario-editar-eliminar-entrada/formulario-editar-eliminar-entrada.component';
import { CommonModule } from '@angular/common';
import { FormularioLoginComponent } from '../../components/formulario-login/formulario-login.component';
import { Router } from '@angular/router';
import { InformacionService } from '../../services/informacion.service';

interface EntradaTrj {
  idUser: any,
  id:any,
  date: any,
  title: any,
  message: any
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormularioEntradaComponent, FormularioEditarEliminarEntradaComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private ruta: Router, private servicio: InformacionService){}

  nombre = localStorage.getItem('usuarioNom')
  idUsuario = Number(localStorage.getItem('usuarioID'))
  dataMensajes: any;
  mensajes: EntradaTrj[] = [];

  ngOnInit(){

    this.servicio.getMensajes().subscribe(mensaje =>{
      this.dataMensajes = mensaje;

        for(let item of this.dataMensajes){
          if (item.idUser === this.idUsuario) {
            this.mensajes.push(item)
          }
        }
    })
  }

  saveInfo(id: any) {
    localStorage.setItem('tarjetaID', id)
  }

  cerrarSesion() {
    FormularioLoginComponent.logeado = false;
    localStorage.setItem('usuarioNom', '');
    localStorage.setItem('usuarioID', '');
    this.dataMensajes = '';
    this.ruta.navigate(['']);
  }
}
