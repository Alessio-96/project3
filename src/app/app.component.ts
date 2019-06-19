import { Component } from '@angular/core';
import { Utente } from './utente';
import { UtenteService } from './utente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaUtenti: Utente[] = [];
  count = 0;

  constructor(private utenteService: UtenteService, private router: Router){}


  addUtente(utente: Utente) {
    utente.id = this.count;

    this.utenteService.addUtente(utente);
    this.count++;
    this.router.navigate(['table']);
  }

  removeUtente(id: number) {
    this.listaUtenti.splice(id, 1);
  }


}


