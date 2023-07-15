import { MessageService } from './../service/messages/message.service';
import { HeroService } from './../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];
  title = 'List of Heroes';

  constructor(private heroServe: HeroService,
    private messageServe: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroServe.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageServe.add(`HeroesComponent: selecionado o Heroi ${hero.name} `)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroServe.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroServe.deleteHero(hero.id).subscribe();
  }
  /* getHeroes(): void {
    this.heroes = this.heroServe.getHeroes();
  } */

}

/*hero = 'Windstorm';
 //hero: Hero = {
   id: 1,
   name: 'Windstorm',
 }*/