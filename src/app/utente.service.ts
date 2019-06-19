import { Injectable } from '@angular/core';
import { Utente } from './utente';
import { TableComponent } from './table/table.component';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  lista: Utente[] = [];
  constructor() { }

  addUtente(utente){
    this.lista.push(utente);
  }

  removeUtente(id){
    this.lista.splice(id, 1);
  }
}
