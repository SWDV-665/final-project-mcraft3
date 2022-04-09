import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Class variable for angular template of title of home.html page
  title = "CPP: Home Page";

  shopImg: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shopImg = 'assets/imgs/shop.svg'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
