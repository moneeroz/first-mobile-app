import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class HomePage {
  constructor(private navCtl: NavController, private router: Router) {}

  navigateForward() {
    // this.navCtl.navigateForward('about'); //using ionic navcontroller

    // using angular router
    // this.router.navigate(['about']);
    this.router.navigateByUrl('about');
  }
}
