import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  invioDati(utente:Utente): Observable<any> {
    let headers = { 'Content-Type': 'application/json' };
    return this.http.post('http://localhost:3000/unsecured/user',utente,{headers:headers});
  }

  getUtenti(): Observable<Utente[]> {

    return this.http.get<Utente[]>('http://localhost:3000/unsecured/users');
  }

  cancellaUtente(id:any): Observable<any> {

    return this.http.delete('http://localhost:3000/unsecured/user/'+id);
  }
}
