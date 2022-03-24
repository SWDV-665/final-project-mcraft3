import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  // Class variable for angular template of title of contact.html page
  title = "CPP: Contact";
  
  constructor(public navCtrl: NavController) {

  }

}
