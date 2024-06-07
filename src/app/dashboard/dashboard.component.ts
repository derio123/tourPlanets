import { HeroService } from './../service/hero.service';
import { Hero } from 'src/data/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  title = 'Top Heroes';

  constructor(private heroServe: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroServe.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 15));
  }

}
