import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let nombre = this.navParams.get('nombre');
    let titulo = this.navParams.get('titulo');
    let img = this.navParams.get('img');
  }

}
