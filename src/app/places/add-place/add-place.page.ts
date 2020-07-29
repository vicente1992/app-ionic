import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {

  constructor(
    private placesServices: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  saveNewPlace(title, imgUrl) {
    this.placesServices.addPlaces(title.value, imgUrl.value)
    this.router.navigate(['places']);

  }

}
