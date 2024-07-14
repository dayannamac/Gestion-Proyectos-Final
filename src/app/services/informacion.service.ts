import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

interface User {
  id: number;
  name: string;
  diaryEntries: DiaryEntry[];
}

interface DiaryEntry {
  date: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  private usuariosUrl = 'assets/usuarios.json';

  constructor(private http: HttpClient) {}

  private getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usuariosUrl).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  addDiaryEntry(userId: number, newEntry: DiaryEntry): Observable<User[]> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.id === userId);
        if (user) {
          user.diaryEntries.push(newEntry);
        }
        return users;
      }),
      catchError(this.handleError<User[]>('addDiaryEntry', []))
    );
  }

  deleteDiaryEntry(userId: number, entryDate: string): Observable<User[]> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.id === userId);
        if (user) {
          user.diaryEntries = user.diaryEntries.filter(entry => entry.date !== entryDate);
        }
        return users;
      }),
      catchError(this.handleError<User[]>('deleteDiaryEntry', []))
    );
  }

  updateDiaryEntry(userId: number, updatedEntry: DiaryEntry): Observable<User[]> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.id === userId);
        if (user) {
          const entryIndex = user.diaryEntries.findIndex(entry => entry.date === updatedEntry.date);
          if (entryIndex !== -1) {
            user.diaryEntries[entryIndex] = updatedEntry;
          }
        }
        return users;
      }),
      catchError(this.handleError<User[]>('updateDiaryEntry', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
