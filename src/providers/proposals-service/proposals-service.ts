import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { ToastController } from 'ionic-angular';
import { Proposal } from '../../app/types';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the ProposalsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProposalsServiceProvider {

  // Array of proposals
  proposals: any = [];

  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

  baseURL = "http://localhost:8080";

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController
    ) {
    console.log('Hello ProposalsServiceProvider Provider');

    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  getAllProposals(): Observable<Proposal[]> {
    return this.http.get(this.baseURL + '/api/proposals').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if(error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  //Reserved for a proposal-detail page to GET single if required in future.
  getProposal(proposal: Proposal): Observable<Proposal>{
    return this.http.get<Proposal>(this.baseURL + "/api/proposals/" + proposal._id); 
  }

  removeProposal(proposal: Proposal) {
    console.log("PS.ts: #### Remove Proposal - id: ", proposal._id);
    this.http.delete<Proposal>(this.baseURL + "/api/proposals/" + proposal._id).subscribe(res => {
      this.proposals = res;
      this.dataChangeSubject.next(true);
      // Display ionic toast component message alert to confirm item being removed.
      const toast = this.toastCtrl.create({
        message: 'PS.ts: Removing Proposal: ' + proposal.subject + ' Last Name: ' + proposal.lastName,
        duration: 3000,
        position: 'bottom',
        showCloseButton: true,
      });
      toast.onDidDismiss(() => {
        console.log('PS.ts: Dismissed DELETE toast');
        window.location.reload();
      });
      toast.present();
    });

  }

  addProposal(proposal: Proposal) {
    console.log("PS.ts: Add Proposal: ", proposal);
    this.http.post<Proposal>(this.baseURL + "/api/proposals/", proposal).subscribe(res => {
      this.proposals = res;
      this.dataChangeSubject.next(true);
      const toast = this.toastCtrl.create({
        message: 'PS.ts: Adding Proposal: ' + proposal.subject + ' Last Name: ' + proposal.lastName,
        duration: 3000,
        position: 'bottom',
        showCloseButton: true,
      });
      toast.onDidDismiss(() => {
        console.log('PS.ts: Dismissed POST toast');
        window.location.reload();
      });
      toast.present();
    });
  }

  editProposal(proposal: Proposal, index: Number) {
    console.log("PS.ts: Editing Proposal: ", proposal, "index: ", index, "ID: ", proposal._id);
    this.http.put<Proposal>(this.baseURL + "/api/proposals/" + proposal._id, proposal).subscribe(res => {
      this.proposals = res;
      this.dataChangeSubject.next(true);
      const toast = this.toastCtrl.create({
        message: 'PS.ts: Editing Proposal: ' + proposal.subject + ' Last Name: ' + proposal.lastName,
        duration: 3000,
        position: 'bottom',
        showCloseButton: true,
      });
      toast.onDidDismiss(() => {
        console.log('PS.ts: Dismissed PUT toast');
        window.location.reload();
      });
      toast.present();
    });

  }

  // provide ability to picture that was captured with camera and formatted with options 
  // or uploaded from platform file system and save to mongoDB database with http.put to proposal.
  saveImage(proposal: Proposal) {
    console.log("PS.ts: Saving Image: ");
    this.http.put<Proposal>(this.baseURL + "/api/proposals/" + proposal._id, proposal).subscribe(res => {
      this.proposals = res;
      this.dataChangeSubject.next(true);
      const toast = this.toastCtrl.create({
        message: 'PS.ts: Image Saved',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true,
      });
      toast.onDidDismiss(() => {
        console.log('PS.ts: Dismissed PUT toast');
        window.location.reload();
      });
      toast.present();
    });
  }

}
