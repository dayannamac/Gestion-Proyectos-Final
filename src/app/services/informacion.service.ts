import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  private mensajesUrl = 'http://localhost:3000/mensajes';

  constructor(private http: HttpClient) {}

  getMensajes(): Observable<any> {
    return this.http.get<any>(this.mensajesUrl);
  }

  postMensajes(usuario: any): Observable<any> {
    return this.http.post<any>(this.mensajesUrl, usuario);
  }

  putMensajes(servicio: any, id: any): Observable<any> {
    this.mensajesUrl = `${this.mensajesUrl}/${id}`
    return this.http.put(this.mensajesUrl, servicio)
  }

  deleteMensajes(id: string): Observable<any> {
    const url = `${this.mensajesUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}


