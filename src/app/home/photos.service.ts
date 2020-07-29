import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  url: string = 'https://jsonplaceholder.typicode.com/photos?_limit=15';
  constructor(private httpClient: HttpClient) { }

  getPhoto() {
    return this.httpClient.get<Photo>(this.url)
  }
}
