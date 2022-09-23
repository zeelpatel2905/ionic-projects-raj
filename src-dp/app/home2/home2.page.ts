import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  dataComing: any;

  constructor(private route: ActivatedRoute) {
    this.dataComing = JSON.parse(this.route.snapshot.params['data']);
    console.log('Home page 2 ', this.dataComing);
  }

  ngOnInit() {}
}
