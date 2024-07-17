import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,map,of, switchMap } from 'rxjs';

interface DiaryEntry {
  id: number;
  fecha: string;
  titulo: string;
  contenido: string;
}

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  private mensajesUrl = 'http://localhost:3000/mensajes';

  constructor(private http: HttpClient) {}

  getDiaryEntries(): Observable<DiaryEntry[]> {
    return this.http.get<{ mensajes: DiaryEntry[] }>(this.mensajesUrl).pipe(
      map(response => response.mensajes),
      catchError(this.handleError<DiaryEntry[]>('getDiaryEntries', []))
    );
  }

  addDiaryEntry(newEntry: DiaryEntry): Observable<DiaryEntry> {
    return this.http.get<{ mensajes: DiaryEntry[] }>(this.mensajesUrl).pipe(
      map(response => response.mensajes),
      switchMap(entries => {
        const updatedEntries = [...entries, newEntry];
        return this.http.put(this.mensajesUrl, { mensajes: updatedEntries }).pipe(
          map(() => newEntry),
          catchError(this.handleError<DiaryEntry>('addDiaryEntry'))
        );
      }),
      catchError(this.handleError<DiaryEntry>('addDiaryEntry'))
    );
  }

  updateDiaryEntry(entry: DiaryEntry): Observable<DiaryEntry> {
    return this.http.get<{ mensajes: DiaryEntry[] }>(this.mensajesUrl).pipe(
      map(response => response.mensajes),
      switchMap(entries => {
        const updatedEntries = entries.map(e => e.id === entry.id ? entry : e);
        return this.http.put(this.mensajesUrl, { mensajes: updatedEntries }).pipe(
          map(() => entry),
          catchError(this.handleError<DiaryEntry>('updateDiaryEntry'))
        );
      }),
      catchError(this.handleError<DiaryEntry>('updateDiaryEntry'))
    );
  }

  deleteDiaryEntry(id: number): Observable<{}> {
    return this.http.get<{ mensajes: DiaryEntry[] }>(this.mensajesUrl).pipe(
      map(response => response.mensajes),
      switchMap(entries => {
        const updatedEntries = entries.filter(entry => entry.id !== id);
        return this.http.put(this.mensajesUrl, { mensajes: updatedEntries }).pipe(
          catchError(this.handleError<{}>('deleteDiaryEntry'))
        );
      }),
      catchError(this.handleError<{}>('deleteDiaryEntry'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}