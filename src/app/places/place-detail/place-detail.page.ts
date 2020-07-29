import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(private activatedRoute: ActivatedRoute,
    private placesServices: PlacesService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId');
      this.place = this.placesServices.getPlace(recipeId);
      console.log(this.place);
    })
  }

  async deletePlace() {
    const alertElement = await this.alertController.create({
      header: 'Estas seguro, de querer eliminar?',
      message: 'Se cuidadoso',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesServices.deletePlaces(this.place.id)
            this.router.navigate(['/places']);
          }
        }
      ]
    });
 await alertElement.present();
  }

}
