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

  @Input() mensajesEE: any;

  updateMessage() {
    this.service.putMensajes(this.mensajesEE, this.mensajesEE.id).subscribe(() => {
      alert("Datos actualizados correctamente!");
      window.location.reload();
    });
  }

  deleteMessage(id: any) {
    this.service.deleteMensajes(id).subscribe()
  }
}
