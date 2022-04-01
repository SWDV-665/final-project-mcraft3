import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// Go up one extra level (add extra ../) to get app folder and back down to providers folder
import { ProposalsServiceProvider } from '../../providers/proposals-service/proposals-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  // Class variable for angular template of title of dashboard.html page
  title = "CPP: Dashboard";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataService: ProposalsServiceProvider,
    public InputDialogService: InputDialogServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  // Get and initialize items in dataService.
  loadProposals() {
    return this.dataService.getProposals();
  }

  // remove proposal with object and it's index as parameters.
  removeProposal(proposal, index) {
    console.log("Deleting proposal - ", proposal, "index: ", index);
    // Display ionic toast component message alert to confirm proposal being deleted.
    const toast = this.toastCtrl.create({
      message: 'Deleting Proposal - ' + 'index: ' + index + " ...",
      duration: 3000,
      position: 'bottom',
      showCloseButton: true,
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
    // Remove one object at given index.
    this.dataService.removeProposal(index);
  }

  editProposal(proposal, index) {
    console.log("Edit item - ", proposal, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.InputDialogService.showPrompt(proposal, index);
  }
  
  addProposal() {
    console.log("Submitting Proposal");
    this.InputDialogService.showPrompt();
  }

}
