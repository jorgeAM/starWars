import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  personaje: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personaje = this.navParams.get('personaje');
  }

}
