import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AboutPage implements OnInit {
  constructor(private navCtl: NavController) {}

  ngOnInit() {}

  navigateBackword() {
    // this.navCtl.back(); // goes back to the previous page
    this.navCtl.navigateBack('home'); //navigate to any page you want. in this case we are navigating back to home
  }
}
