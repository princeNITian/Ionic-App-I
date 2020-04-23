import { Injectable } from '@angular/core';
import { Place } from '../places/place.model';

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York City",
      "https://i.pinimg.com/originals/69/c2/23/69c223ff61fb4160044e5ba1e9e23d05.jpg",
      149.99
    ),
    new Place(
      "p2",
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://myldrwithafrenchman.files.wordpress.com/2017/01/eiffel_tower_in_paris__france_073036_.jpg?w=1118",
      189.99
    ),
    new Place(
      "p3",
      "The Foggy Palace",
      "Not your average city trip!",
      "https://live.staticflickr.com/4711/26100810738_0f74f58b9b_b.jpg",
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }
  constructor() {}
}
