import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface User {
  nombreUsuario: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usersUrl = 'assets/usuarios.json';

  constructor(private http: HttpClient) { }

  login(nombreUsuario: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.nombreUsuario === nombreUsuario && u.password === password);
        return !!user;
      })
    );
  }
}
