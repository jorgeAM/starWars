import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//tabs
import { Tab1Page } from '../tab1/tab1'
import { Tab2Page } from '../tab2/tab2'
import { Tab3Page } from '../tab3/tab3'

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = Tab1Page;
    this.tab2 = Tab2Page;
    this.tab3 = Tab3Page;
  }

}
