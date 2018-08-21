import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CameraGalleryProvider } from '../../providers/camera-gallery/camera-gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  previewImage: any = '';

  constructor(
    public navCtrl: NavController, 
    private cameragalleryProvider: CameraGalleryProvider) {

  }

  takeImage(){
    this.cameragalleryProvider.takeImage().then(data => {
      this.previewImage = 'data:image/jpeg;base64,' + data;
    });
  }

  pickImage(){
    this.cameragalleryProvider.selectImageFromGellary().then(data => {
      this.previewImage = 'data:image/jpeg;base64,' + data;
    });
  }

}
