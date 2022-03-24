import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Class variable for angular template of title of home.html page
  title = "CPP: Home Page";

  constructor(public navCtrl: NavController) {

  }

}
