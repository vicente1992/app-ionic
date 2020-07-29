import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Photo } from './photo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  photos: Photo;
  constructor(private photoServices: PhotosService) { }
  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photoServices.getPhoto().subscribe(photo => {
      this.photos = photo;
    })
  }

}
