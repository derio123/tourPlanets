import { MessageService } from './../service/messages/message.service';
import { HeroService } from './../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/data/planet';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  planets: Planet[] = [];
  title = 'List of Planets';

  constructor(private heroServe: HeroService,
    private messageServe: MessageService) { }

  ngOnInit(): void {
    this.getPlanet();
  }

  getPlanet(): void {
    this.heroServe.getPlanets()
      .subscribe(planet => this.planets = planet);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroServe.addPlanet({ name } as Planet)
      .subscribe(planet => {
        this.planets.push(planet);
      });
  }

  delete(planet: Planet): void {
    this.planets = this.planets.filter(h => h !== planet);
    this.heroServe.deleteHero(planet.id).subscribe();
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