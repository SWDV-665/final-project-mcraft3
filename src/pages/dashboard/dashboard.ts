import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// Go up one extra level (add extra ../) to get app folder and back down to providers folder
import { ProposalsServiceProvider } from '../../providers/proposals-service/proposals-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Proposal } from '../../app/types';
import { Observable } from 'rxjs/Observable';

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

  //TODO: Extract to ImageService openCamera() & openGallery().

  userImg: any = '';
  base64Img = '';

  // proposals: any = [];
  proposals: Observable<Proposal[]>;
  errorMessage: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataService: ProposalsServiceProvider,
    public inputDialogService: InputDialogServiceProvider,
    private camera: Camera
    ) {
      const toast = this.toastCtrl.create({
        message: 'Retrieving list from database',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true,
      });
      toast.onDidDismiss(() => {
        console.log('dashboard.ts: Dismissed getAllProposals toast');
      });
      toast.present();

      setTimeout( () => {
        // Get and initialize proposals in dataService.
        // Loading of loadProposals() call during construction/startup.
        this.proposals = this.loadProposals();
      }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openCamera(proposal) {
    /*
    Available Options:

    quality: it ranges from 0-100
    sourceType: Source of an image can be PHOTOLIBRARY(0), CAMERA(1), SAVEDPHOTOALBUM(2)
    encodingType: JPEG(0) or PNG(1)
    saveToPhotoAlbum: Save the image to the photo album on the device after capture
    cameraDirection: BACK(0) or FRONT(1)
    targetWidth: width in pixels, example 512.
    targetHeight: height in pixels, example 512.
    */
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 225,
      targetHeight: 150
    }

    this.camera.getPicture(options).then((imgData) => {
      console.log('image data => ', imgData);
      this.base64Img = 'data:image/jpeg;base64,' + imgData;
      this.userImg = this.base64Img;
      proposal.userImg = this.userImg;
      this.dataService.saveImage(proposal);
    }, (err) => {
      console.log(err);
    })

  }

  openGallery(proposal) {
    const galleryOptions: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit: true,
      targetWidth: 225,
      targetHeight: 150
    }

    this.camera.getPicture(galleryOptions).then((imgData) => {
      console.log('image data => ', imgData);
      this.base64Img = 'data:image/jpeg;base64,' + imgData;
      this.userImg = this.base64Img;
      proposal.userImg = this.userImg;
      this.dataService.saveImage(proposal);
    }, (err) => {
      console.log(err);
    })
  }

  
  // Get and initialize proposals in dataService.
  loadProposals() {
    return this.dataService.getAllProposals();
  }
  

  // remove proposal with object and it's index as parameters.
  removeProposal(proposal, index) {
    console.log("DS.ts: Removing Proposal - ", proposal, "index: ", index, "ID: ", proposal._id);
  
    // Remove one object at given index.
    this.dataService.removeProposal(proposal);
  }

  // Edit proposal with object and it's index as parameters.
  editProposal(proposal: Proposal, index) {
    console.log("DS.ts: Edit Proposal - ", proposal, "index: ", index, "ID: ", proposal._id);
    this.inputDialogService.showEditPrompt(proposal, index);
  }

  // Add items using alertController.
  addProposal() {
    console.log("DS.ts: Adding Item");
    this.inputDialogService.showAddPrompt();
  }

}
