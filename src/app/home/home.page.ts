import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locationWatchStarted: boolean;
  locationSubscription: any;

  locationTraces = [];

  constructor(private geolocation: Geolocation) {}

  getCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.locationTraces.push({
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude,
          accuracy: resp.coords.accuracy,
          timestamp: resp.timestamp,
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });

    this.locationSubscription = this.geolocation.watchPosition();
    this.locationSubscription.subscribe((resp) => {
      this.locationWatchStarted = true;
      this.locationTraces.push({
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        accuracy: resp.coords.accuracy,
        timestamp: resp.timestamp,
      });
    });
  }
}
