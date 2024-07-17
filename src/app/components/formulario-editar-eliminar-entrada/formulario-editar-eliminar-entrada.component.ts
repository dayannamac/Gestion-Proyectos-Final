import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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

export class FormularioEditarEliminarEntradaComponent implements OnChanges {

  @Input() mensajesEE: any;
  message: string = '';
  title: string = '';
  date: string = '';

  constructor(private service: InformacionService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mensajesEE'] && this.mensajesEE) {
      this.message = this.mensajesEE.message;
      this.title = this.mensajesEE.title;
      this.date = this.mensajesEE.date;
    }
  }

  updateMessage() {
    if (this.mensajesEE) {
      const updatedEntry = {
        ...this.mensajesEE,
        message: this.message,
        title: this.title,
        date: this.date
      };

      this.service.putMensajes(updatedEntry, this.mensajesEE.id).subscribe(() => {
        alert("Datos actualizados correctamente!");
        window.location.reload();
      });
    }
  }

  deleteMessage() {
    if (this.mensajesEE) {
      this.service.deleteMensajes(this.mensajesEE.id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}

