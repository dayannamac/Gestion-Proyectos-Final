import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import {FormsModule, NgForm } from '@angular/forms';

interface DiaryEntry {
  id: number;
  fecha: any;
  titulo: string;
  contenido: string;
}
@Component({
  selector: 'app-formulario-entrada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-entrada.component.html',
  styleUrl: './formulario-entrada.component.css'
})
export class FormularioEntradaComponent {
  

  constructor(private infoService: InformacionService) {}

  saveEntry(form: NgForm) {
    if (form.valid) {
      const nuevaEntrada: DiaryEntry = {
        id: Date.now(), // Genera un ID único
        fecha: form.value.fecha,
        titulo: form.value.titulo,
        contenido: form.value.contenido
      };

      this.infoService.addDiaryEntry(nuevaEntrada).subscribe(
        response => {
          console.log('Entrada registrada', response);
          form.resetForm();
        },
        error => {
          console.error('Error registrando la entrada', error);
        }
      );
    }
  }
}
