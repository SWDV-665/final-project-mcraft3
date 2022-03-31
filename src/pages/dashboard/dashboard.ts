import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// Go up one extra level (add extra ../) to get app folder and back down to providers folder
import { ProposalsServiceProvider } from '../../providers/proposals-service/proposals-service';

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
    public dataService: ProposalsServiceProvider
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
    this.showEditProposalPrompt(proposal, index);
  }
  
  addProposal() {
    console.log("Submitting Proposal");
    this.showAddProposalPrompt();
  }
  
  // Use Alert Controller Prompt to take input and add proposal to proposals array.
  showAddProposalPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Submit Proposal',
      //message: "Please enter item...",
      inputs: [
        {
          name: 'ProjectID',
          placeholder: 'Project ID'
        },
        { 
          name: 'LastName',
          placeholder: 'Last Name'
        },
        {
          name: 'FirstName',
          placeholder: 'First Name'
        },
        {
          name: 'Email',
          placeholder: 'Primary POC email@emailcom'  
        },
        {
          name: 'Phone',
          placeholder: 'telephone xxx-xxx-xxxx'
        },
        {
          name: 'Department',
          placeholder: 'Department'
        },
        {
          name: 'DivBranchCode',
          placeholder: 'Division / Branch Code'
        },  
        {
          name: 'Category',
          placeholder: 'Category'
        },
        {
          name: 'Subject',
          placeholder: 'Subject'
        },
        {
          name: 'Description',
          placeholder: 'Description'
        },
      ],
  
      buttons: [
        {
          text: 'Cancel',
          handler: data  => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: proposal => {
            console.log('Submit clicked', proposal);
            // add new proposal to proposals array
            this.dataService.addProposal(proposal);
          }
        }
      ]
      });
      prompt.present();
    }

      // Use Alert Controller Prompt to edit existing item in items array.
  showEditProposalPrompt(proposal, index) {
    const prompt = this.alertCtrl.create({
      title: 'Edit Item',
      message: "Please edit item...",
      // ternary null operator for values. If item passed, use it, if not null.
      inputs: [
        {
          name: 'ProjectID',
          placeholder: 'Project ID',
          value: proposal ? proposal.ProjectID : null
        },
        { 
          name: 'LastName',
          placeholder: 'Last Name',
          value: proposal ? proposal.LastName : null
        },
        {
          name: 'FirstName',
          placeholder: 'First Name',
          value: proposal ? proposal.FirstName : null
        },
        {
          name: 'Email',
          placeholder: 'Primary POC email@emailcom',
          value: proposal ? proposal.Email : null  
        },
        {
          name: 'Phone',
          placeholder: 'telephone xxx-xxx-xxxx',
          value: proposal ? proposal.Phone : null
        },
        {
          name: 'Department',
          placeholder: 'Department',
          value: proposal ? proposal.Department : null
        },
        {
          name: 'DivBranchCode',
          placeholder: 'Division / Branch Code',
          value: proposal ? proposal.DivBranchCode : null
        },  
        {
          name: 'Category',
          placeholder: 'Category',
          value: proposal ? proposal.Category : null
        },
        {
          name: 'Subject',
          placeholder: 'Subject',
          value: proposal ? proposal.Subject : null
        },
        {
          name: 'Description',
          placeholder: 'Description',
          value: proposal ? proposal.Description : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data  => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: proposal => {
            console.log('Save clicked', proposal);
            this.dataService.editProposal(proposal, index);
          }
        }
      ]
      });
      prompt.present();
    }


}
