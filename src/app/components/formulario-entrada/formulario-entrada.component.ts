import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-entrada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-entrada.component.html',
  styleUrl: './formulario-entrada.component.css',
})
export class FormularioEntradaComponent {
  constructor(private servicio: InformacionService) { }

  idEntrada: any;
  date: any;
  title: any;
  message: any;

  saveEntry(form: any) {
    this.servicio.getMensajes().subscribe((entries) => {
      let idMayor = 0;

      for (const entrie of entries) {
        if (entrie.id > idMayor) {
          idMayor = entrie.id;
        }
      }

      this.idEntrada = idMayor + 1;

      const nuevaEntrada = {
        id: this.idEntrada,
        idUser: Number(localStorage.getItem('usuarioID')),
        date: form.value.fecha,
        title: form.value.titulo,
        message: form.value.contenido,
      };

      this.servicio.postMensajes(nuevaEntrada).subscribe(() => {
        alert('Entrada registrada!');
        window.location.reload();
      });
    });
  }
}
