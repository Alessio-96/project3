import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Utente } from '../utente';
import { Router } from '@angular/router';
import { UtenteService } from '../utente.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  lista: Utente[] = this.utenteService.lista;



  constructor(private router: Router, private utenteService: UtenteService) { }

  ngOnInit() {
  }


  modify(id) {
    console.log('sono nel metodo', id);
    this.router.navigate(['utente-details', id]);
  }

  removeUtente(id) {
    this.utenteService.removeUtente(id);
  }

}
