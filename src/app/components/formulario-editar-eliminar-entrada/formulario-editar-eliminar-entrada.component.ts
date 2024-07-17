import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InformacionService } from '../../services/informacion.service';

interface DiaryEntry {
  id: number;
  fecha: string;
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-formulario-editar-eliminar-entrada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-editar-eliminar-entrada.component.html',
  styleUrls: ['./formulario-editar-eliminar-entrada.component.css']
})
export class FormularioEditarEliminarEntradaComponent implements OnInit {
  entries: DiaryEntry[] = [];
  selectedEntry: DiaryEntry | null = null;

  constructor(private informacionService: InformacionService) {}

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void {
    this.informacionService.getDiaryEntries().subscribe(entries => this.entries = entries);
  }

  onSelect(entry: DiaryEntry): void {
    this.selectedEntry = { ...entry }; // Clonar la entrada seleccionada
  }

  saveChanges(form: NgForm): void {
    if (this.selectedEntry) {
      const updatedEntry = {
        ...this.selectedEntry,
        fecha: form.value.fecha,
        titulo: form.value.titulo,
        contenido: form.value.contenido
      };
      this.informacionService.updateDiaryEntry(updatedEntry).subscribe(() => {
        this.getEntries();
        this.selectedEntry = null;
        form.resetForm(); // Reiniciar el formulario
      });
    }
  }

  onDelete(entry: DiaryEntry): void {
    this.informacionService.deleteDiaryEntry(entry.id).subscribe(() => {
      this.getEntries();
    });
  }
}