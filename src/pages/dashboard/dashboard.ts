import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  // Array of proposals
  proposals = [
    {
      ProjectID: 11032,
      LastName: "Wilson",
      FirstName: "Charlie",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "anyone@anywhere.com",
      Department: "A",
      DivBranchCode: "A2",
      Category: "MS",
      Subject: "New Audio Visual System for Large Conference Room",
      Description: "Need projector, displays, speakers, etc.",
      SafetyIssue: "no",
      SecurityIssue: "no",
      Submitted: "2021-04-28T22:57:58+00:00"
    },
    {
      ProjectID:5281,
      LastName: "Kimble",
      FirstName: "Bill",
      Email: "test@test.com",
      Phone:"123-456-7890",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "B",
      DivBranchCode: "B2",
      Category: "CSC",
      Subject: "Firmware Lab for UAVs and unmanned systems",
      Description: "For pizza delivery uav project.",
      SafetyIssue: "no",
      SecurityIssue: "no",
      Submitted: "2021-04-28T23:49:26+00:00"
    },
    {
      ProjectID: 20102,
      LastName: "Banks",
      FirstName: "Bobby",
      Email: "test@test.com",
      Phone: "123-456-7890",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "C",
      DivBranchCode: "C1",
      Category: "MS",
      Subject: "Water Supply is weak and no hot water",
      Description: "Need hot water.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-29T00:08:40+00:00"
    },
    {
      ProjectID: 6558,
      LastName: "Bower",
      FirstName: "Brad",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "anyone@test.com",
      Department: "C",
      DivBranchCode: "C3",
      Category: "CE",
      Subject: "Need CAD Software",
      Description: "CAD software is obsolete.",
      SafetyIssue: null,
      SecurityIssue: "yes",
      Submitted: "2021-04-29T00:10:47+00:00"
    },
    {
      ProjectID: 43697,
      LastName: "Brown",
      FirstName: "Tim",
      Email: "anyone@anywhere.com",
      Phone: "123-456-7890",
      AltPOCEmail: "anyone@anywhere.com",
      Department: "C",
      DivBranchCode: "A3",
      Category: "MF",
      Subject: "HVAC Heat is stuck on",
      Description: "Building is at 88F. Heat is stuck on. Controls not working.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-29T00:12:28+00:00"
    },
    {
      ProjectID: 85767,
      LastName: "America",
      FirstName: "Captain",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "B",
      DivBranchCode: "B1",
      Category: "CSC",
      Subject: "Establish vibranium lab",
      Description: "Need lab to recycle, re-purpose, and manufacture new vibranium widgets for Captain America.",
      SafetyIssue: "yes",
      SecurityIssue: "yes",
      Submitted: "2021-04-29T00:17:05+00:00"
    },
    {
      ProjectID: 59362,
      LastName: "Brown",
      FirstName: "Charlie",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "C",
      DivBranchCode: "C1",
      Category: "CE","Subject":"3D Metal Printer",
      Description: "Need tech refresh of metal 3D Printer.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-30T00:32:35+00:00"
    },
    {
      ProjectID: 59628,
      LastName: "Hood",
      FirstName: "Robin",
      Email: "test@test.com",
      Phone: "123-456-7890",
      AltPOCEmail: "anyone@test.com",
      Department: "B",
      DivBranchCode: "B1",
      Category: "MS",
      Subject: "Broken Bow",
      Description: "Need new bow.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-30T00:35:29+00:00"
    },
    {
      ProjectID: 96238,
      LastName: "Stalone",
      FirstName: "Sylvester",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "anyone@anywhere.com",
      Department: "C",
      DivBranchCode: "C1",
      Category: "MF",
      Subject: "Resharpen Rambo knife",
      Description: "My blade is dull, please resharpen.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-30T00:37:04+00:00"
    },
    {
      ProjectID:50445,
      LastName:"Eastwood",
      FirstName:"Clint",
      Email:"anyone@anywhere.com",
      Phone:"123-456-7890",
      AltPOCEmail:"anyone@anywhere.com",
      Department:"B",
      DivBranchCode:"B1",
      Category:"MS",
      Subject:"need a new handle for the 44 magnum",
      Description:"Please use elk horn or ironwood for the handle.",
      SafetyIssue:"yes",
      SecurityIssue:"no",
      Submitted:"2021-04-30T00:38:50+00:00"
    },
    {
      ProjectID: 23219,
      LastName: "Man",
      FirstName: "Super",
      Email: "anyone@anywhere.com",
      Phone: "123-456-7890",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "B",
      DivBranchCode: "C1",
      Category: "MS",
      Subject: "Cape is dirty",
      Description: "Please dry clean the cape and attach a new S emblem to replace the worn out emblem.",
      SafetyIssue: "no",
      SecurityIssue: "no",
      Submitted: "2021-04-30T00:40:41+00:00"
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  // remove proposal with object and it's index as parameters.
  removeItem(proposal, index) {
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
    this.proposals.splice(index, 1);
  }

  editItem(proposal, index) {
    console.log("Edit item - ", proposal, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.showEditItemPrompt(proposal, index);
  }
  
  addItem() {
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
            this.proposals.push(proposal);
          }
        }
      ]
      });
      prompt.present();
    }

      // Use Alert Controller Prompt to edit existing item in items array.
  showEditItemPrompt(proposal, index) {
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
            this.proposals[index] = proposal;
          }
        }
      ]
      });
      prompt.present();
    }


}
