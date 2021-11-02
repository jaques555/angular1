import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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


  ricerca(myform) {

    const nome = myform.form.controls.nome.value;
    const cognome = myform.form.controls.cognome.value;

    this.userService.ricercaUtenti(nome, cognome).subscribe(resp=>{

              this.utentiLista = resp;
    });
  }

}
