import { MessageService } from './messages/message.service';
import { Injectable } from '@angular/core';
import { Hero } from 'src/data/hero';
import { HEROES } from 'src/data/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServe: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageServe.add('Hero Message: Fetched Message');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageServe.add(`HeroService: Fetched hero id=${id}`);
    return of(hero);
  }
}
