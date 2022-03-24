import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // Class variable for angular template of title of about.html page
  title = "CPP: About";
  
  constructor(public navCtrl: NavController) {

  }

}
