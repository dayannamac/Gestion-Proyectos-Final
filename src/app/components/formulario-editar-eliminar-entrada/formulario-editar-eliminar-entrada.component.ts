import { Component, Input } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-editar-eliminar-entrada',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './formulario-editar-eliminar-entrada.component.html',
  styleUrls: ['./formulario-editar-eliminar-entrada.component.css']
})
export class FormularioEditarEliminarEntradaComponent {
  
  constructor(private service: InformacionService){}

  message: any;
  title: any;
  date: any;

  updateMessage(message: string, title: string, date: string) {
    let id = Number(localStorage.getItem('tarjetaID'));
    let idUser = Number(localStorage.getItem('usuarioID'));

    const entrada = {
      id,
      idUser,
      date,
      title,
      message
    }

    this.service.putMensajes(entrada, id).subscribe()
    window.location.reload()
  }

  deleteMessage() {
    let id = String(localStorage.getItem('tarjetaID'))
    this.service.deleteMensajes(id).subscribe()
    window.location.reload()
  }
}
