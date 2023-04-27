import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { LocalNotifications } from '@capacitor/local-notifications';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class HomePage {
  imageUrl: string = '';

  constructor(private navCtl: NavController, private router: Router) {}

  navigateForward() {
    // this.navCtl.navigateForward('about'); //using ionic navcontroller

    // using angular router
    // this.router.navigate(['about']);
    this.router.navigateByUrl('about');
  }

  takePhoto() {
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      this.imageUrl = image.webPath as string;
    };
    takePicture();
  }

  async showLocal() {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'Local Notification 1',
          body: 'testing local notifications',
        },
        {
          id: 2,
          title: 'Local Notification 2',
          body: 'testing scheduled local notifications',
          schedule: { at: new Date(new Date().getTime() + 30 * 1000) },
        },
      ],
    });
  }
}
