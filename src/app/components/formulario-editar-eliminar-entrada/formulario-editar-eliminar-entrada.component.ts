import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-formulario-editar-eliminar-entrada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-editar-eliminar-entrada.component.html',
  styleUrls: ['./formulario-editar-eliminar-entrada.component.css']
})
export class FormularioEditarEliminarEntradaComponent {
  
  constructor(private service: InformacionService){}

  actualizarUsuario(id:string, fecha: string, titulo: string, contenido: string) {
    const idUser = Number(localStorage.getItem('usuarioID'));
    const iden = +id;

    const mensajes = {
      idUser,
      iden,
      fecha,
      titulo,
      contenido,
    }

    this.service.putMensajes(mensajes, iden).subscribe()
    window.location.reload()
  }

  deleteMessage(id: any) {
    this.service.deleteMensajes(id).subscribe()
  }
}
