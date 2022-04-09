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

  // Use Alert Controller Prompt to edit existing item in items array.
  // ? makes parameters optional for add case.
  showPrompt(proposal?, index?) {
    const prompt = this.alertCtrl.create({
      // If proposal, edit, if no proposal add
      title: proposal ? 'Edit Proposal' : 'Add Proposal',

      // ternary null operator for values. If proposal passed, use it, if not null.
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
        {
        name: 'ProposalImage',
        placeholder: 'assets/imgs/image.svg',
        value: proposal ? proposal.ProposalImage : null
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

}
