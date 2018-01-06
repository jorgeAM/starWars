import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//DATA
import { Personaje } from '../../interfaces/personaje';
import { PERSONAJES } from '../../data/personajes.data';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  personajes: Personaje[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes = PERSONAJES.slice(0);
  }

  detalle(personaje: any){
    console.log(personaje);
  }

}
