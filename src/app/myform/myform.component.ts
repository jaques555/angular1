import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  utenteForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UtenteService) { }

  ngOnInit() {

    this.utenteForm = this.fb.group({

      nome: new FormControl('', Validators.required),
      cognome: new FormControl('', Validators.required)
    });
  }


  invio() {

    const utente = new Utente();

    utente.nome = this.utenteForm.get('nome').value;
    utente.cognome = this.utenteForm.get('cognome').value;

    this.userService.invioDati(utente).subscribe(resp=>{

      this.utenteForm.reset();
    });

  }

}
