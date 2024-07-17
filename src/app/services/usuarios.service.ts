import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.usuariosUrl);
  }

  postUsuarios(usuario: any): Observable<any> {
    return this.http.post<any>(this.usuariosUrl, usuario);
  }

  deleteUsuarios(id: string): Observable<any> {
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  checkUsernameExists(username: string): Observable<boolean> {
    const url = `${this.usuariosUrl}?usuario=${username}`;
    return this.http.get<any[]>(url).pipe(
      map(response => response.length > 0)
    );
  }
}
