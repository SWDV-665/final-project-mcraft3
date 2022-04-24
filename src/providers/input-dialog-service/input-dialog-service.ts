import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
// Go up one extra level (add extra ../) to get app folder and back down to providers folder
import { ProposalsServiceProvider } from '../../providers/proposals-service/proposals-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(
    public alertCtrl: AlertController,
    public dataService: ProposalsServiceProvider
  ) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  // Use Alert Controller Prompt to edit existing proposal in proposals array.
  // ? makes parameters optional for add case.
  showAddPrompt(proposal?, index?) {
    const prompt = this.alertCtrl.create({
      // If proposal, edit, if no proposal add
      title: proposal ? 'Edit Proposal' : 'Add Proposal',

      // ternary null operator for values. If proposal passed, use it, if not null.
      inputs: [
        /*
        {
          name: '_id',
          placeholder: 'Project ID',
          value: proposal ? proposal._id : null
        },
        */
        { 
          name: 'lastName',
          placeholder: 'Last Name',
          value: proposal ? proposal.lastName : null
        },
        {
          name: 'firstName',
          placeholder: 'First Name',
          value: proposal ? proposal.firstName : null
        },
        {
          name: 'email',
          placeholder: 'Primary POC email@emailcom',
          value: proposal ? proposal.email : null  
        },
        {
          name: 'phone',
          placeholder: 'telephone xxx-xxx-xxxx',
          value: proposal ? proposal.phone : null
        },
        {
          name: 'department',
          placeholder: 'Department',
          value: proposal ? proposal.department : null
        },
        {
          name: 'divBranchCode',
          placeholder: 'Division / Branch Code',
          value: proposal ? proposal.divBranchCode : null
        },  
        {
          name: 'category',
          placeholder: 'Category',
          value: proposal ? proposal.category : null
        },
        {
          name: 'subject',
          placeholder: 'Subject',
          value: proposal ? proposal.subject : null
        },
        {
          name: 'description',
          placeholder: 'Description',
          value: proposal ? proposal.description : null
        },
        {
        name: 'userImg',
        placeholder: 'Proposal Image',
        value: proposal ? proposal.userImg : 'assets/imgs/image.svg'
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
            if (index !== undefined) {
            this.dataService.editProposal(proposal, index);
            }
            else {
              // add new proposal to proposals array. Moved to proposals-service.ts.
              this.dataService.addProposal(proposal);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  // Use Alert Controller Prompt to edit existing proposal in proposals array.
  // ? makes parameters optional for add case.
  showEditPrompt(proposal?, index?) {
    const prompt = this.alertCtrl.create({
      // If proposal, edit, if no proposal add
      title: proposal ? 'Edit Proposal' : 'Add Proposal',

      // ternary null operator for values. If proposal passed, use it, if not null.
      inputs: [
        {
          name: '_id',
          placeholder: 'Project ID',
          value: proposal ? proposal._id : null
        },
        { 
          name: 'lastName',
          placeholder: 'Last Name',
          value: proposal ? proposal.lastName : null
        },
        {
          name: 'firstName',
          placeholder: 'First Name',
          value: proposal ? proposal.firstName : null
        },
        {
          name: 'email',
          placeholder: 'Primary POC email@emailcom',
          value: proposal ? proposal.email : null  
        },
        {
          name: 'phone',
          placeholder: 'telephone xxx-xxx-xxxx',
          value: proposal ? proposal.phone : null
        },
        {
          name: 'department',
          placeholder: 'Department',
          value: proposal ? proposal.department : null
        },
        {
          name: 'divBranchCode',
          placeholder: 'Division / Branch Code',
          value: proposal ? proposal.divBranchCode : null
        },  
        {
          name: 'category',
          placeholder: 'Category',
          value: proposal ? proposal.category : null
        },
        {
          name: 'subject',
          placeholder: 'Subject',
          value: proposal ? proposal.subject : null
        },
        {
          name: 'description',
          placeholder: 'Description',
          value: proposal ? proposal.description : null
        },
        {
        name: 'userImg',
        placeholder: 'Proposal Image',
        value: proposal ? proposal.userImg : 'assets/imgs/image.svg'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: proposal  => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: proposal => {
            console.log('IDS.ts: Save Handler ', proposal, "index: ", index, "ID: ", proposal._id);
            if (index !== undefined) {
              proposal._id = proposal._id;
              proposal.lastName = proposal.lastName;
              proposal.firstName = proposal.firstName;
              proposal.email = proposal.email;
              proposal.phone = proposal.phone;
              proposal.department = proposal.department;
              proposal.divBranchCode = proposal.divBranchCode;
              proposal.category = proposal.category;
              proposal.subject = proposal.subject;
              proposal.description = proposal.description;
              proposal.userImg = proposal.userImg;
            this.dataService.editProposal(proposal, index);
            }
            else {
              // add new proposal to proposals array. Moved to proposals-service.ts.
              this.dataService.addProposal(proposal);
            }
          }
        }
      ]
    });
    prompt.present();
  }

}
