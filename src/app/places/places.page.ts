import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { PlacesService } from './places.service';
//models
import { Place } from './place.model';
@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places: Place[];

  constructor(
    private placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }
  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }
  addNewPlace() {
    this.router.navigate(['new-place']);
  }
  getToHome() {
    this.router.navigate(['home']);
  }



}
