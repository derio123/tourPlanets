import { Planet } from 'src/data/planet';
import { HeroService } from './../service/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  planets: Planet[] = [];
  title = 'Top Planets';

  constructor(private heroServe: HeroService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.heroServe.getPlanets()
      .subscribe(planet => this.planets = planet.slice(0, 8));
  }

}
