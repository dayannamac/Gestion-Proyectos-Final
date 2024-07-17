import { Component } from '@angular/core';
import { FormularioEntradaComponent } from '../../components/formulario-entrada/formulario-entrada.component';
import { FormularioEditarEliminarEntradaComponent } from '../../components/formulario-editar-eliminar-entrada/formulario-editar-eliminar-entrada.component';
import { CommonModule } from '@angular/common';
import { FormularioLoginComponent } from '../../components/formulario-login/formulario-login.component';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private ruta: Router, private servicio: InformacionService, private rutaActive: ActivatedRoute){}

  nombre = localStorage.getItem('usuarioNom')
  dataMensajes: any;
  mensajes: EntradaTrj[] = [];

  ngOnInit(){
    let idUsuario = Number(localStorage.getItem('usuarioID'))
    console.log(idUsuario);

    this.servicio.getMensajes().subscribe(mensaje =>{
      this.dataMensajes = mensaje;
      console.log(mensaje);
      console.log(idUsuario);

        for(let item of this.dataMensajes){
          if (item.idUser === idUsuario) {
            this.mensajes.push(item)
          }
        }
      console.log('Mensajes final for'+this.mensajes);
    })
  }

  cerrarSesion() {
    FormularioLoginComponent.logeado = false;
    localStorage.setItem('usuarioNom', '');
    localStorage.setItem('usuarioID', '');
    this.dataMensajes = '';
    this.ruta.navigate(['']);
  }
}
