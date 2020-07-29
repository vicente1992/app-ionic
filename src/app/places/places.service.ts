import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public places: Place[] = [
    {
      id: '1',
      title: 'Torre eiffel',
      imgUrl: 'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
      coments: ['Lugar asombroso', 'experiencia ']
    },
    {
      id: '2',
      title: 'Estatua de la libertad',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      coments: ['Lugar asombroso', 'experiencia ']
    },
    {
      id: '3',
      title: 'San Antero',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      coments: []
    }
  ]
  constructor() { }

  getPlaces() {
    return [...this.places]

  }
  addPlaces(title: string, imgUrl: string) {
    this.places.push({
      title,
      imgUrl,
      coments: [],
      id: this.places.length + 1 + ''
    })
  }

  getPlace(placeId: string) {
    return {
      ... this.places.find(place => {
        return place.id === placeId
      })
    }
  }
  deletePlaces(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    })

  }
}
