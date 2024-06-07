import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Planet } from 'src/data/planet';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const planets = [
      {
        id: 1, name: 'Jupiter', img: '../../assets/img/jupiter.jpeg', system: 'System Solar',
      },
      {
        id: 2, name: 'Mars', img: '../../assets/img/mars.jpeg', system: 'System Solar',
      },
      {
        id: 3, name: 'Saturn', img: '../../assets/img/saturn.jpeg', system: 'System Solar',
      },
      {
        id: 4, name: 'Uranus', img: '../../assets/img/uranus.jpeg', system: 'System Solar',
      },
      {
        id: 5, name: 'Mercure', img: '../../assets/img/mercure.jpeg', system: 'System Solar',
      },
      {
        id: 6, name: 'Neptune', img: '../../assets/img/neptune.jpeg', system: 'System Solar',
      },
      {
        id: 7, name: 'Moon', img: '../../assets/img/lune.jpeg', system: 'System Solar',
      },
      {
        id: 8, name: 'Earth', img: '../../assets/img/earth.jpg', system: 'System Solar',
      },
      {
        id: 9, name: 'Venus', img: '../../assets/img/venus.jpeg', system: 'System Solar',
      },
    ];

    return { planets };
  }

  getId(planets: Planet[]) {
    return planets.length > 0 ? Math.max(...planets.map(hero => hero.id)) + 1 : 11;
  }
}
