import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import { Utente } from '../utente';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utente-details',
  templateUrl: './utente-details.component.html',
  styleUrls: ['./utente-details.component.css']
})
export class UtenteDetailsComponent implements OnInit {
  ciao = 'biagio';
  id: number;
  utente: Utente;
  images: any[];
  lista: Utente[] = this.utenteService.lista;


  constructor(private utenteService: UtenteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.images = [];
    this.images.push({ images: 'assets/gallery/arnold.jpg', alt: 'Description for Image 1', title: 'Title 1' });

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id, 'eccomi');
    });

    this.getUtente(this.utente);
  }


  getUtente(id) {
    this.utenteService.lista.forEach(utente => {
      if (this.utente === this.utente) {
        this.utente = utente;
        console.log(utente.nome, 'stampami');

      } else {
        console.log('utente non trovato');
      }
    })
  }

}
