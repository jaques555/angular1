import { Component, OnInit } from '@angular/core';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-mylista',
  templateUrl: './mylista.component.html',
  styleUrls: ['./mylista.component.css']
})
export class MylistaComponent implements OnInit {

 utentiLista: Utente[];

  constructor(private userService: UtenteService) { }

  ngOnInit() {

       this.userService.getUtenti().subscribe(resp=>{

           this.utentiLista = resp;
       })
  }


  cancella(event) {

    this.userService.cancellaUtente(event).subscribe(resp=>{

      this.ngOnInit();

    });
  }

}
