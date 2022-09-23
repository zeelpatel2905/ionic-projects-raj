import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Home2Page } from '../home2/home2.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any = {};

  constructor(private navController: NavController) {}

  submitAndDisplay() {
    this.navController.navigateForward([
      'home2',
      {
        data: JSON.stringify(this.user),
      },
    ]);
  }
}
