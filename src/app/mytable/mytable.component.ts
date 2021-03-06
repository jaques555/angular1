import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utente } from '../utente';

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {

  @Input()
  utentiChild: Utente[];

  @Output()
  cancellaUtenteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  eliminaUtente(utente: Utente) {
   
     this.cancellaUtenteEvent.emit(utente._id);

  }

}
