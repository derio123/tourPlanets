import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/data/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 1, name: 'Captain America', img: '../../assets/img/captainAmerica.png', power: 'super soldier' },
      { id: 2, name: 'Elektra', img: '../../assets/img/elektra3.png', power: 'martial arts' },
      { id: 3, name: 'Iron Man', img: '../../assets/img/ironman.png', power: 'science' },
      { id: 4, name: 'Captain Marvel', img: '../../assets/img/CMCarol4.png', power: 'photonic' },
      { id: 5, name: 'Yara', img: '../../assets/img/WWYara2.png', power: 'strong' },
      //{ id: 2, name: 'AERO (LEI LING)', img: '../../assets/img/Aero.png' },
      { id: 6, name: 'Diana', img: '../../assets/img/WWDiana3.png', power: 'strong' },
      //{ id: 4, name: 'Arclight', img: '../../assets/img/Arclight.png' },
      //{ id: 5, name: 'ASP', img: '../../assets/img/Asp.png' },
      
      
      
      
      { id: 10, name: 'Iron Heart', img: '../../assets/img/ironHeart4.png', power: 'science' },
      { id: 11, name: 'Thor', img: '../../assets/img/thor.png', power: 'thunder' },
      { id: 12, name: 'Black Window', img: '../../assets/img/blackwindow.png', power: '' },
      { id: 13, name: 'Spider Marvel', img: '../../assets/img/spiderman.png', power: 'sense spider' },
      { id: 14, name: 'Doctor Strange', img: '../../assets/img/doctorstrange1.png', power: 'magic' },
      { id: 15, name: 'Scalet Witch', img: '../../assets/img/scaletwitch1.png', power: 'reality smart' },
      { id: 16, name: 'Hulk', img: '../../assets/img/hulk.png', power: 'super strong' },

      /* {id: 15, name: 'o', img: 'x' }, */
      /* {id: 15, name: 'o', img: 'x' }, */
      /* {id: 15, name: 'o', img: 'x' }, */
      /* {id: 15, name: 'o', img: 'x' }, */
    ];

    return {heroes};
  }

  getId(heroes: Hero[]) {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
